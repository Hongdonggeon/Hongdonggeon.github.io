---
title: 동시성 처리하기 (Synchronized)
categories:
  - java
  - spring
date: 2022-12-12
---



## 주어진 상황

수량과 상품을 필드로 가지고 있는 재고(Stock) 엔티티가 있습니다. 

재고를 감소하는 로직을 만들고 멀티 스레드 환경에서 개발자가 기대한 값만큼 재고 수량이 감소되었는지 확인해보겠습니다.

아래의 그림이 재고 수량을 감소시키는 로직(decrease())입니다.

![image](https://user-images.githubusercontent.com/67885363/207378986-bb234761-e9f5-4d70-847a-de18e2708e08.png)



<br/>



100개의 스레드를 가지고 재고 수량을 감소시키는 작업을 실행시키겠습니다.

이후에 재고를 조회한 후, 재고 수량을 조회해보겠습니다. 

감소시키기 전 수량이 100이었고 100개의 스레드가 감소를 시켰으니 기대 값은 0입니다.

![image](https://user-images.githubusercontent.com/67885363/207379843-e0f79d0d-1bed-4721-9758-311e1f155f76.png)



하지만 결과 값은 0이 아닌 97이 나왔습니다.

이유에 대해 알아보겠습니다.

race Condition이 발생했기 때문입니다. Stock이라는 공유자원을 두고 여러 스레드가 변경하려고 했기 때문입니다.

간단한 그림으로 상황을 살펴보면, 아래와 같습니다.

스레드 2개가 수량을 감소시키므로 기대한 수량 값은 98입니다. 하지만 실제로는 스레드 1이 조회한 후 갱신하기 전에 스레드 2가 조회를 하면서 스레드 1이 갱신하기 전의 상태를 감소 시키므로 기대값을 도출해내지 못하는 문제가 발생했습니다.

![image](https://user-images.githubusercontent.com/67885363/207383407-0c23b06d-ee0c-4eae-b22d-55a77aa9b8de.png)

<br/>
<br/>

## Synchronized 사용하기

![image](https://user-images.githubusercontent.com/67885363/207385470-4b23069b-66d1-4435-b27a-9650d53360cc.png)

race Condition 문제를 해결하기 위해 synchronized 키워드를 붙여주었다. 

하나의 스레드만 이 decrease 메서드에 접근할 수 있을 것 입니다.

하지만 다시 테스트를 돌려보았을 때 결과 값이 0이 아닌 1이 나왔습니다.

![image](https://user-images.githubusercontent.com/67885363/207385814-2ef016d4-13af-49fa-9668-c886d58d3bab.png)


<br/>

race Condition이 발생한 이유는 @Transactional 동작 원리때문입니다.

@Transactional의 동작원리는 프록시 방식의 AOP로 동작되기 때문에  타겟 객체를 래핑한 프록시 객체가 작업을 전달받아 decrease 실제 로직만 타겟 객체에게 위임하는 방식으로 동작이 됩니다.

그래서 아래의 그림과 같이 트랜잭션이 종료되기 전에 스레드 1이 synchronized 메서드를 이미 실행했지만 트랜잭션을 커밋하기 전에 스레드2가 synchornized 메서드가 접근하게 되면서 기대 값을 얻을 수 얻게 되었습니다.



![image](https://user-images.githubusercontent.com/67885363/207387567-8e060b6b-e7a4-409a-a685-8f4a1a8fc161.png)



<br/>

![image](https://user-images.githubusercontent.com/67885363/207389510-85797f38-1145-440b-9870-cd427f59f426.png)

그래서 위의 그림과 같이 @Transactional을 제거하고 테스트를 돌려보았을 때는 기대한 값인 0이 나오는 것을 확인할 수 있었습니다.

하지만 이것 또한 문제가 있습니다. 자바의 Synchronized는 하나의 프로세스안에서만 동시성 처리 보장이 됩니다. 

서버가 여러 대가 되었을 때는 synchronized로 맨 처음과 같은 문제가 발생할 수 있습니다. 

따라서 해당 문제는 데이터베이스 락을 통해 Race Condition 문제를 해결해야 합니다.

데이터베이스 락을 통한 Race Condition 문제는 다음 포스팅에서 알아보겠습니다.