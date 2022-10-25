---
title: Application Context를 재활용해서 테스트 시간을 줄이자
categories:
  - spring
  - test
  - checkmate
date: 2022-08-28
---

JUnit은 테스트 메서드를 실행할 때마다 매번 테스트 클래스의 새로운 오브젝트를 만든다. 따라서 모든 테스트는 서로 영향을 주지 않으며 독립적으로 실행되는 것을 보장한다. 하지만 테스트가 독립적이라고 해서 매번 Application Context를 새로 만드는 건 매우 비효율적이다. 

스프링은 이러한 문제를 해결하기 위해 Context Caching 기능을 제공한다. Spring 테스트 컨텍스트 프레임워크는 한번 ApplicationContext가 만들어지면 이를 캐시에 저장하고 다른 테스트를 돌릴 때 환경이 같으면 재사용한다.

스프링 테스트 컨텍스트 프레임워크는 테스트 클래스의 여러 configuration으로 key를 구성하는데, 이 key가 같으면 환경이 같은 것이다.

- `locations` (from `@ContextConfiguration`)
- `classes` (from `@ContextConfiguration`)
- `contextInitializerClasses` (from `@ContextConfiguration`)
- `contextCustomizers` (from `ContextCustomizerFactory`)
- `contextLoader` (from `@ContextConfiguration`)
- `parent` (from `@ContextHierarchy`)
- `activeProfiles` (from `@ActiveProfiles`)
- `propertySourceLocations` (from `@TestPropertySource`)
- `propertySourceProperties` (from `@TestPropertySource`)
- `resourceBasePath` (from `@WebAppConfiguration`)



우리 팀은 테스트 코드를 작성할 때 해당 테스트를 위한 ApplicationContext를 xml 파일로 따로 관리하고 있지 않기 때문에 캐싱을 하기 위해 신경 쓸 부분은 빈의 상태(mockbean인지 진짜 빈인지) 밖에 없었다. 

> 빈을 @MockBean으로 사용할 경우 ContextCustomizers에 MockitoContextCustomizer가 추가되게 되고 cache key가 달라지면서 Application Context를 재사용하지 못하게 된다.



우리팀은 Controller Test에서 Service 클래스를 mocking 하고 있는 슬라이싱 테스트를 하고 있다. 각 클래스는 필요한 서비스 클래스를 @MockBean으로 주입받고 있기 때문에 모든 테스트 클래스가 환경이 달라 ApplicationContext가 재사용되고 있지 않았다.

- Controller 환경이 같을 때
https://youtu.be/mbsHgEo-bMI

- Controller 환경이 다를 때
https://youtu.be/jchDQkxZL7Q