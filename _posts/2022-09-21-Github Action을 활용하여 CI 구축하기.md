---
title: Github Action을 활용하여 CI 구축하기
categories:
  - infra
  - checkmate
date: 2022-09-21
---

## CI(Continuous Integration)란?

고객의 요구사항에 빠르게 대응하기 위해 나온 Extreme Programming의 실천방안 중 1가지다.

여러 명이 하나의 코드에 대해 수정을 진행해도 지속적으로 통합하면서 관리할 수 있음을 의미한다.



### CI가 있기 전에는 어떻게 했나?

개발자들은 머지데이라는 날을 통해 모든 분기 소스코드를 병합했다고 한다. 수동적으로 개발자가 하는 것이기 때문에 시간도 많이 걸릴뿐더러 에러 발생 확률도 높고 통합적으로 많은 리소스를 낭비되었을 것이다.



### CI에 대한 4가지 규칙

CI 도구를 도입했다고 해서 CI를 하고 있다는 것은 아니다. 마틴 파울러는 CI에 대해 아래와 같은 4가지 규칙을 이야기한다.

1. 모든 소스코드가 현재 실행되고, 모든 사용자가 현재 소스코드에 접근할 수 있는 단일 지점을 유지할 것
2. 누구나 단일 명령을 사용하여 빌드할 수 있도록 빌드 프로세스를 자동화할 것
3. 단일 명령으로 언제든지 테스트를 실행할 수 있도록 할 것
4. 누구나 현재 실행 파일을 얻으면 지금까지 가장 완전한 실행 파일을 얻었다는 확신을 하게 할 것

<br/> 

## 왜 Github Action을 사용했나?

기존에 체크메이트에서는 CI/CD 작업을 젠킨스로 진행하고 있었다.

하나의 ec2 서버 (젠킨스)에서 프론트엔드와 백엔드의 CI/CD 작업을 진행하다보니, 동시 다발적으로 많은 Pull Request를 하게 되면 젠킨스 서버가 과부하가 되서 태스크를 수행하는 시간이 너무 오래 걸리게 되었다. (무려 30분이나 걸린 적도 있었다...)

> 우리 팀의 깃헙에서 젠킨스로의 웹훅 발생 시점은 Pull Request를 열었거나, 열려있는 Pull Request에 새로운 커밋을 push 했을 때다. 

백엔드의 테스트 코드 수도 많아지면서 빌드 시간이 오래걸리게 되었을 뿐더러, 이런 상황을 다음에는 방지하고자 프론트엔드와 백엔드의 CI/CD 서버를 분리하기로 했다.

분리하는 과정 중에서 젠킨스가 아닌 Github Action이라는 대안책을 생각해보게 되었고 시도해보게 되었다.



### CI를 위한 Github Action 워크플로우

```yaml
name: checkmate-backend-CI

# Workflow를 실행시키기 위한 이벤트 목록 
# main, dev 브랜치에 pr을 열고, pr에 커밋이 추가될 때마다 (branches, types)
# backend 하위 패키지에 변경이 일어날 때만 작동 (paths)
on:
  pull_request:
    branches:
      - dev
      - main
    paths:
      - backend/**
    types: [ opened, synchronize ]

# 작업을 수행할 기본 디렉토리 위치 지정
defaults:
  run:
    working-directory: backend

jobs:
  # job의 이름
  build:
    runs-on: ubuntu-latest

    steps:
    	# Github 가상 호스트 서버에 JDk 설치하기
      - name: Set up JDK 11
        uses: actions/setup-java@v3
        with:
          java-version: '11'
          distribution: 'adopt'
			
			# 소스코드 체크아웃
      - name: Checkout source code
        uses: actions/checkout@v2
        with:
          token: ${{ secrets.SUBMODULE_TOKEN }}
          submodules: true
			
			# gradlew 파일 권한 변경
      - name: Change gradlew permission
        run: sudo chmod 755 gradlew

			# 빌드 시작
      - name: Build with Gradle
        run: ./gradlew build
```

처음에 워크 플로우를 작성했을 때는 빌드 후,  테스트 결과와 jacoco의 커버리지 결과를 comment로 달아주는 액션을 추가해주었는데, pull reuqest에 새로운 커밋을 푸쉬할 때마다 comment가 생기니 오히려 불편했다. (중간 중간에 comment들이 있으니 conversation 보는 것이 더 불편) 

그리고 커멘트를 달아주는 결과도 정확하지 않아서 삭제했다.



### Github Action vs Jenkins?

Github Action과 젠킨스 모두 전문적으로 튜닝을 해보면서 사용한 것이 아닌 경험해본 수준이라 두 도구의 장단점을 확실히 파악할 수는 없었지만, 개인적인 내 생각은 Github Action이 훨씬 편했다. 

세 가지 이유로 Github Action을 CI 도구로 결정했다.

- 빌드의 상세 로그를 Github Repository에서 바로 확인할 수 있는 점이 더 편했다.
- Github이 관리하는 클라우드 서버에서 실행되기 때문에 서버 설치 및 관리를 따로 할 필요가 없었다.
- Jenkins 같은 경우에는 작업들이 동기적으로 일어나서 한 작업이 끝나야 그 다음 작업이 수행되는 반면, Github Action은 동시 다발적으로 태스크를 수행할 수 있다. (이 이유가 가장 매력적이었다.)





