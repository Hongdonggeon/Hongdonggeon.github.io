---
title: Garbage Collection
categories:
  - java
date: 2022-12-09


---



## 가비지 컬렉션

가비지 컬렉션은 자바의 메모리 관리 방법 중 하나로 JVM의 Heap 영역에서 동적으로 할당했던 메모리 중 필요 없게 된 메모리 객체를 모아 주기적으로 제거하는 프로세스입니다.

- 장점
  - 개발자가 신경쓰지 않아도 메모리를 해제해주기 때문에 메모리를 효율적으로 사용할 수 있습니다
- 단점
  - 메모리가 언제 해제되는지 정확하게 알 수 없어 제어하기 힘들다.
  - 가비지 컬렉션이 동작하는 동안에는 다른 동작을 멈추기 때문에(Stop-The-World) 오버헤드가 발생되는 문제점이 있다.



<br/>



### 가비지 컬렉션 대상

가비지 컬렉션은 객체가 제거 대상인지 판단하기 위해 도달성이라는 개념을 적용한다.

- Reacheable : 객체가 참조되고 있는 상태
- Unreacheable : 객체가 참조되고 있지 않은 상태 (GC의 대상이 됨)



![image](https://user-images.githubusercontent.com/67885363/207439237-6d672d13-1fa5-4e9c-84a8-a433b57b149d.png)

객체들은 Heap 영역에서 생성되고 Method Area나 Stack Area에서는 Heap에 생성된 객체의 주소만 참조하는 형식이다.

메서드가 종료되어 힙 영역의 객체 메모리 주소를 가지고 있는 참조 변수가 메모리에서 삭제된다면 위 그림의 빨간색 객체와 같이 참조되고 있지 않은 객체들이 발생하게 된다.

이런 Unreacheable 객체들을 주기적으로 가비지 컬렉터가 제거해준다.



<br/>



### 가비지 컬렉션 청소 방식 (Mark And Sweep)

가비지 컬렉션이 될 대상 객체를 식별하고 제거하며 객체가 제거되어 파편화된 메모리 영역을 앞에서부터 채워나가는 작업을 수행하게 됩니다.

- Mark 과정 : Root Space (stack, method area ..) 로부터 그래프 순회를 통해 연결된 객체들을 찾아내어 어떤 객체를 참조하고 있는지 찾아서 마킹한다.
- Sweep 과정 : 참조하고 있지 않은 객체 Unreacheable 객체들을 힙에서 제거한다.
- Compact 과정 : Sweep 후에 분산된 객체들을 힙의 시작 주소로 모아 메모리가 할당된 부분을 압축한다.



<br/>



### 가비지 컬렉션 동작 과정

![image](https://user-images.githubusercontent.com/67885363/207505714-4bf7485c-47a2-47e8-8298-a77d0b2fbf61.png)

힙 영역은 처음 설계될 때 2가지를 전제로 설계했습니다.

- 대부분의 객체는 금방 접근 불가능한 상태가 된다.
- 오래된 객체에서 새로운 객체로의 참조는 아주 적게 존재한다.

이러한 특성을 이용해 객체의 생존 기간에 따라 물리적인 힙 영역을 나누게 되었고 Young과 Old 총 2가지 영역으로 설계했다.



- Young 영역
  - 새롭게 생성된 객체가 할당 되는 영역
  - 대부분의 객체가 Unreacheable 상태가 되므로 Young 영역에 객체가 생성되었다가 사라진다.
  - Young 영역에 대한 가비지 컬렉션을 Minor GC라고 부른다.



효율적인 GC를 위해 Young 영역을 3가지 영역으로 나눈다.

- Eden
  - new 를 통해 새로 생성된 객체가 위치
  - 정기적인 쓰레기 수집 후 살아남은 객체들은 Survivor 영역으로 보냄
- Survivor 0 / Survivor 1
  - 최소 1번 GC 이상 살아남은 객체가 존재하는 영역
  - Survivor 0 또는 Survivor 1 둘 중 하나에는 꼭 비어있어야 한다.



- Old 영역
  - Young 영역에서 Reacheable 상태를 유지하여 살아남은 객체가 복사되는 영역
  - Young 영역보다 크게 할당되며, 영역의 크기가 큰 만큼 가비지는 적게 발생한다.
  - Old 영역에 대한 가비지 컬렉션을 Major GC 또는 Full GC 라고 부른다.



<br/>



### Minor GC 과정

Young Generation의 공간은 Old Generation에 비해 상대적으로 작기 때문에 메모리 상의 객체를 찾아 제거하는데 적은 시간이 걸린다. Young Generation 영역에서 발생되는 GC를 Minor GC라고 불린다.



- 처음 생성된 객체는 Eden 영역에 위치한다.
- Eden 영역이 꽉차면 Minor GC 실행한다.
- Mark 동작을 통해 reacheable 객체를 탐색하고 unreacheable 객체들은 메모리를 해제한다.
- Eden 영역에서 살아남은 객체는 1개의 Survivor0 영역으로 이동한다. (살아남은 객체들은 age 값이 1 증가)
- 또 Eden 영역에 객체들이 가득 차면 Minor GC 발생하고 mark 한다.
- marking 한 객체들은 비어있는 survivor 1로 이동하고 sweep
- 이러한 과정을 반복한다.

<br/>

### Major GC 과정

Old Generation 객체들은 거슬러 올라가면 처음에는 Young Generation에 의해 시작되었으나 GC 과정 중에 제거되지 않은 경우 age 임계값이 차게되어 이동된 객체들이다.

Major GC는 Old 영역의 메모리가 부족해지면 발생하게 됩니다.



- survivor에 있는 객체가 age 임계값에 도달하게 되어 Old Generation으로 이동된다. 이를 프로모션이라고 한다.
- 위 과정이 반복되어 Old Generation 영역의 공간이 부족해지면 Major GC 가 발생되게 된다.



 Old Generation은 Young Generation에 비해 상대적으로 큰 공간을 가지고 있어, 이 공간에서 메모리 상의 객체 제거에 많은 시간이 걸리게 된다.

Major GC가 일어나면 Thread가 멈추고 Mark and Sweep 작업을 해야 해서 CPU에 부하를 주기 때문에 멈추거나 버벅이는 현상이 일어나기 때문이다.



<br/>



### 다양한 가비지 컬렉션 알고리즘 종류

- Serial GC
  - 스레드가 1개, stop-the-world 시간이 길다
- Parallel GC 
  - java 8의 디폴트 GC
  - Minor GC 를 멀티 스레드로 수행, Old 영역은 싱글 스레드
- Parallel Old GC 
  - paralle GC를 개선한 버전
  - Old 영역에서도 멀티 스레드로 GC 수행
  - Mark-Summary-Compact 방식
- CMS GC
  - 어플리케이션 스레드와 GC 스레드가 동시에 실행되어 stop-the-world 시간 최대한 줄이기 위해 고안
  - GC 과정 매우 복잡, cpu 사용량 높음
  - Java 9 버전부터 deprecated
- G1 GC
  - java 9+ 버전의 디폴트 GC
  - 기존의 GC 알고리즘에서는 힙 영역을 물리적으로 young/old 영역으로 나누어 사용했지만 g1 gc 는 Region이라는 개념을 새로 도입
  - Region이라는 영역으로 체스같이 분할하여 상황에 따라 eden, survivor, old 등 역할을 고정이 아닌 동적으로 부여
  - 가비지로 가득찬 영역을 빠르게 회수해 빈 공간을 확보하므로, GC 빈도가 줄어드는 효과 얻음
  - 객체들이 예전처럼 순차적으로 이동하는 것이 아니라 효율적이라고 생각되는 위치에 객체를 재할당시킨다. (survivor1 -> eden)
- shenandoah GC 
  - 12에 release
  - 기존 cms가 가진 단편화, g1이 가진 puase 이슈 해결
  - 강력한 동시성과 가벼운 GC 로직으로 힙 사이즈에 영향 받지 않고 일정한 pause 시간 소요
- ZGC 
  - 15에 release
  - 힙 크기가 증가하더라도 stop-the-world 시간 절대 10ms 넘지 않는다고 함