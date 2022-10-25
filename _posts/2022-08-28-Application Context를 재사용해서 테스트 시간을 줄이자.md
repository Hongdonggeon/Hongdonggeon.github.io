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

> 빈을 @MockBean으로 사용할 경우 ContextCustomizers에 MockitoContextCustomizer가 추가되게 되고 cache key가 달라지면서 Application Context를 재사용하지 못하게 된다.

<br/>

우리 팀은 Controller 계층을 테스트할 때 @WebMvcTest를 이용해 Service 객체를 mocking하는 슬라이싱 테스트를 하고 있다. 
각 ControllerTest는 필요한 서비스 객체를 각자 @MockBean으로 주입받고 있기 때문에 모든 테스트 클래스가 환경이 달라지게 되었고 ApplicationContext가 재사용되고 있지 않았다.

<img width="509" alt="image" src="https://user-images.githubusercontent.com/67885363/197691261-ca21af43-9e43-47a0-9a2a-d8ec22b582e3.png">

모든 ControllerTest의 환경을 같게 하기 위해서, 위 사진과 같이 상위 클래스에서 환경 구성을 하게 한 후에, 시간을 비교해보았다.


<br/>

- Controller 환경이 같을 때

<iframe width="560" height="315" src="https://www.youtube.com/embed/mbsHgEo-bMI" frameborder="0" allowfullscreen></iframe>


- Controller 환경이 다를 때

<iframe width="560" height="315" src="https://www.youtube.com/embed/jchDQkxZL7Q" frameborder="0" allowfullscreen></iframe>

<br/>

인텔리제이에서 표시되는 테스트 시간은 거의 동일하지만 (중간에 Application Context가 로드되는 시간을 포함하지 않음), 동영상을 녹화해서 직접 비교해보니 Controller 환경이 같을 때는 12초 정도 걸리고 Controller 환경이 다를 때 16초 정도 걸리는 것을 확인할 수 있었다.

프로젝트의 전체 빈을 스캔하는 @SpringBootTest를 이용할 때, Application Context의 캐싱이 가져다 주는 장점은 더 클 것이라는 생각이 든다.

>참고 <br/>
토비의 스프링 - vol.2 (이일민 님)