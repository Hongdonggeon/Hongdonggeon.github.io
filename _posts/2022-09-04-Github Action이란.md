---
title: Github Action에 대해
categories:
  - infra
  - checkmate
date: 2022-09-04
---

Github Actions이란 소프트웨어 개발 라이프사이클 안에서 Pull Request, Push 등의 이벤트 발생에 따라 자동화된 작업을 진행할 수 있게 해주는 기능이다.

## Github Actions로는 어떤 작업을 할 수 있나

1. CI/CD
    
    우리가 Jenkins로 했던 CI/CD 작업도 Github Actions을 활용해서 할 수 있다.
    
    Github Actions에서는 사용자가 지정한 이벤트 발생에 따라 자동으로 빌드 및 배포하는 스크립트를 실행시켜준다.
    
2. Testing
    
     Pull Request를 보낼 때, 자동으로 테스트를 진행하는 것 또한 Github Actions으로 구현할 수 있다. 또한 테스트 성공 여부에 따라 결과를 보여줄 수 있다.
    
3. Cron Job
    
    Github Actions를 통해 특정 시간대에 스크립트를 반복 실행하도록 구현할 수 있다.
    
<br/>


## Github Actions의 구성 요소

Github Actions를 활용하기 위해 구성요소들이 존재한다.

### Workflow

Workflow란 레포지토리에 추가할 수 있는 일련의 자동화된 커맨드 집합이다.

하나 이상의 Job으로 구성되어 있으며, Push나 PR과 같은 이벤트에 의해 실행될 수도 있고 특정 시간대에 실행될 수도 있다.

빌드, 테스트, 배포 등 각각의 역할에 맞는 Workflow를 추가할 수 있고, `.github/workflows` 디렉토리에 YAML 형태로 저장하면 된다.

<br/>

### Event

Event란 Workflow를 실행시키는 Push, Pull Request, Commit 등의 특정 행동을 의미한다.

그리고 위의 특정 행동이 아닌, Webhook을 사용하면 Github 외부에서 발생한 이벤트에 의해서도 Workflow를 실행시킬 수 있다.

Event 종류 :  [Github Actions 공식 문서](https://docs.github.com/en/actions/reference/events-that-trigger-workflows)

<br/>

### Job

Job이란 동일한 Runner에서 실행되는 여러 Step의 집합을 의미한다. 

기본적으로 하나의 Workflow 내의 여러 Job은 독립적으로 실행되지만, 필요에 따라 의존 관계를 설정하여 순서를 지정해줄 수도 있다.

<br/>

### Step

Step이란 커맨드를 실행할 수 있는 각각의 Task를 의미하는데, Shell 커맨드가 될 수도 있고, 하나의 Action이 될 수도 있다.

하나의 Job 내에서 각각의 Step은 다양한 Task로 인해 생성된 데이터를 공유할 수 있다.

<br/>

### Action

Action이란 Job을 만들기 위해 Step을 결합한 독립적인 커맨드로, 재사용이 가능한 Workflow의 가장 작은 단위의 블럭이다.

직접 만든 Action을 사용하거나 Github Community에 의해 생성된 Action을 불러와 사용할 수 있다.

<br/>

### Runner

Runner란 Github Actions Workflow 내에 있는 Job을 실행시키기 위한 애플리케이션이다.

Runner Application은 Github에서 호스팅하는 가상 환경 또는 직접 호스팅하는 가상 환경에서 실행 가능하며, Github에서 호스팅하는 가상 인스턴스의 경우에는 메모리 및 용량 제한이 존재한다.

<br/>

> 참고자료

[https://www.daleseo.com/github-actions-basics/](https://www.daleseo.com/github-actions-basics/)

[https://www.daleseo.com/github-actions-checkout/](https://www.daleseo.com/github-actions-checkout/)

[https://www.daleseo.com/?tag=GitHubActions](https://www.daleseo.com/?tag=GitHubActions)