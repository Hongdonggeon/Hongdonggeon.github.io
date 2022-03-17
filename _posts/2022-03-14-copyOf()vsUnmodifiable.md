---
title: Collections.unmodifiableList() vs List.copyOf()
toc: true
toc_sticky: true
categories:
  - java
date: 2022-03-14
---

이전 내용을 간략하게 요약해보자.<br/>
인자로 들어올 원본 List의 변화가 객체 내부 필드의 변화까지 일어나지 않게 하기 위해 방어적 복사를 해주었다.<br/>
방어적 복사를 하게 되면, 원본 List와 객체 내부 필드의 참조 값이 달라지면서, 외부의 변화에 대해 막아줄 수 있었다.


```java
public final class Cards {

    private final List<Card> cards;

    public Cards(List<Card> initialCards) {
        cards = new ArrayList(initialCards); // new ArrayList<>()를 이용해 복사본을 만들었다. -> 방어적 복사
    }
  
    public List<Card> getCards() {
        return cards;
    }
}
```

그렇다면, 이제 `List<Card> cards`를 외부에서의 변화에 걱정하지 않고 사용할 수 있을까? <br/>
아니다. `getCards()`로 리스트를 불러와, 변경시킨다면 Cards의 필드에도 변화가 가해질 것이다.



```java
public class Application {

    public static void main(String[] args) {
        List<Card> initialCards = new ArrayList<>();
        initialCards.add(Card.valueOf(Symbol.DIAMOND, Denomination.FIVE));
        initialCards.add(Card.valueOf(Symbol.DIAMOND, Denomination.FOUR));

        Cards cards = new Cards(initialCards);

        for (Card card : cards.getCards()) {
            System.out.print("card = " + card);
            System.out.println(", card content = " + card.getDenomination() + " " +card.getSymbol());
        }

        cards.getCards().add(Card.valueOf(Symbol.HEART, Denomination.THREE)); // getter()로 List를 불러와 새로운 Card 추가

        for (Card card : cards.getCards()) {
            System.out.print("card = " + card);
            System.out.println(", card content = " + card.getDenomination() + " " +card.getSymbol());
        }

    }

}
```


![image](https://user-images.githubusercontent.com/67885363/158881619-6675b204-5f18-41ac-a12a-a10cc17c6328.png)

`Cards`의 `getter()`를 이용해 List를 불러와 새로운 카드를 추가하였다.<br/>
그렇다면, `getter()`에서도 필드를 그대로 반환해주는 것이 아닌, 방어적 복사를 해서 외부에서의 변화를 막아주자.


<br/>

### 첫번째 방법, new ArrayList() 

```java
public final class Cards {
  
    private final List<Card> cards;

    public Cards(List<Card> initialCards) {
        cards = new ArrayList(initialCards); // new ArrayList<>()를 이용해 복사본을 만들었다. -> 방어적 복사
    }
  
    public List<Card> getCards() {
        return new ArrayList<>(cards);
    }
}
```

`getter()`에서도 방어적 복사를 함으로써, 필드의 참조값과 `getCards()`가 반환하는 List의 참조 값을 다르게 해주었다.


<br/>

### 두번째 방법, Collections.unmodifiableList()

```java
public final class Cards {

    private final List<Card> cards;

    public Cards(List<Card> initialCards) {
        cards = new ArrayList<>(initialCards);
    }

    public List<Card> getCards() {
        return Collections.unmodifiableList(cards);
    }
}
```


![image](https://user-images.githubusercontent.com/67885363/158884061-518ed7d1-641f-47a2-8849-14a1a71baf3a.png)

`Unmodifiable Collection`을 이용하는 경우에, 외부에서 변경 시 예외가 발생한다.<br/>
`unmodifiableList()` 메서드를 통해 리턴되는 리스트는 읽기 용도로만 사용할 수 있다.<br/>
리스트에 변경을 가하는 메서드를 호출하면 `UnsupportedOperationException` 이 발생한다.


<br/>

### 세번째 방법, List.copyOf()

```java
public final class Cards {

    private final List<Card> cards;

    public Cards(List<Card> initialCards) {
        cards = new ArrayList<>(initialCards);
    }

    public List<Card> getCards() {
        return List.copyOf(cards);
    }
}
```



![image](https://user-images.githubusercontent.com/67885363/158885545-095c9184-bffd-494c-92f7-de5dff8d5b93.png)

`copyOf`를 이용하였을 때도 `UnsupportedOperationException`이 발생했다.
`List.copyOf()`로 반환되는 List도 수정이 불가한가보다.
그렇다면, `Collections.unmodifiableList()`와 `List.copyOf()`의 차이가 뭘까?


<br/>

### Collections.unmodifiableList() vs List.copyOf()

둘의 차이점을 알아보기 위해, 간단한 코드를 작성해보겠다.

```java
public class CopyOfTest {

    public static void main(String[] args) {
        List<Integer> values = new ArrayList<>();
        values.add(1);

        List<Integer> unmodifiableList = Collections.unmodifiableList(values);
        
        List<Integer> copyOfList = List.copyOf(values);

        values.add(2);

        System.out.println("===========unmodifiableList===============");
        for (Integer integer : unmodifiableList) {
            System.out.println(integer);
        }

        System.out.println("===========copyOf================");

        for (Integer integer : copyOfList) {
            System.out.println(integer);
        }
    }
}
```

이 결과 값은 어떻게 될까?

<br/>

![image](https://user-images.githubusercontent.com/67885363/158887087-dbfcc0e1-b411-4209-9f19-4a6be120d746.png)

`unmodifiableList`는 원본 값에 영향을 받고 있다.<br/>
원본 리스트에 새로운 값을 추가해주니, 변화하였다.<br/>
하지만, `copyOfList`는 변화하지 않았다. 왜?<br/>
`List.copyOf`는  원본과의 참조를 끊어주기 때문이다.

차이점으로, `Collections.unmodifiableList()`로는  참조가 끊어져 있지 않다.<br/>
 따라서, `Collections.unmodifiableList()`로 반환한 리스트를 직접 수정할 수는 없지만, 원본 리스트를 수정한다면 함께 수정이 일어난다.<br/>

`Unmodifiable`과 `Immutable`은 다르다.<br/>
 `Unmodifiable`이라는 키워드가 불변을 보장해주지는 않는다.<br/>
원본 자체에 대한 수정이 일어나면 `unmodifiableList()` 메서드를 통해 리턴되었던 리스트 또한 변경이 일어난다.

<br/>

### 이제, 정말 불변일까?

```java
public final class Cards {

    private final List<Card> cards;

    public Cards(List<Card> initialCards) {
        cards = new ArrayList<>(initialCards);
    }

    public List<Card> getCards() {
        return List.copyOf(cards);
    }
}
```

생성자에 들어올 원본 리스트와의 주소 값도 끊어주었고, `getCards()`로 리스트를 반환할 때도 `copyOf()`를 이용해, 외부에서의 변화에 대해 막아주었다.<br/>
하지만, `new ArrayList()`, `Collections.unmodifiableList()`, `copyOf()` 모두 깊은 복사를 한 것이 아니다.<br/>
즉, 리스트의 참조 값만 끊어 준 것이지, 리스트 내부의 객체 참조 값은 동일하다.<br/>
만약 Card 클래스에 `setter()`가 존재한다면, `cards`는 외부에서 얼마든지 변할 수 있다.<br/>
그렇다고 꼭 깊은 복사를 해야한다는 것은 아니다.<br/>
`Card`가 불변 객체라면, 방어적 복사만으로도 `cards`는 충분히 안전한 리스트라고 할 수 있다고 생각한다.



