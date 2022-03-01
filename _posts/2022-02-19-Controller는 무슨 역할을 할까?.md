---
title: 2022.02.19 Controller는 무슨 역할을 하는가?
toc: true
toc_sticky: true
categories:
  - java
  - til
date: 2022-02-19
---

## Controller는 무슨일을 하는가?

항상 Controller의 로직을 짤 때마다, 의문이 들었다.
Controller는 인스턴스의 상태를 가지고 있지 않기 때문에 유틸리티 클래스로 만들어줘도 되지 않을까? 
Controller 같이 모든 코드를 조립해주는 클래스들을 어떻게 해야 더 객체지향적인 코드로 설계할 수 있을까?

리뷰어님께 이러한 궁금증들을 여쭤보게 되었고, `View가 Controller로 넘어와도 될까요?` 라는 역질문을 받게 되었다.

```java
public class Game {
	public void start() {
		Set<Car> cars = CarFactory.of(InputView.inputCarNames());
		int count = InputView.inputGameCount();
		OutputView.printGameResultTitle();
		play(cars);
		showResult(cars);
	}

	public Set<Car> play(Set<Car> cars) {
		for (Car car : cars) {
			Referee.judgeCarMove(car, makeRandomValue());
		}
		return cars;
	}

	public void showResult(Set<Car> cars) {
		for (Car car : cars) {
			OutputView.printLineString(car.toString());
		}
		OutputView.printBlankLine();
	}


```

지금과 같은 경우에는 View가 Console이기 때문에, Controller에서 View를 직접 반환하기 때문에 위와 같은 구조가 되겠지만, 추후에 App이나 Web의 경우에는 사용할 수 없는 구조이다.
그리고 view가 controller와 결합성이 높게 되면 도메인이 영향을 받을 가능성이 높아지고 controller가 하나의 view에 종속적일 수 밖에 없다.

그래서 controller에 들어오기 전에 View를 통해 input을 받고 입력받은 String값을 controller에 넘겨주고, output의 경우에도 Controller에서 return한 값을 output에 전달하는 방식을 제안해주셨다.
직접 View를 전달하는 것이 아닌, 서버에서는 API를 넘기고 front 작업을 따로 하는 형식이다.

```java
public class GameController {
    private static final String NEGATIVE_ERROR_MESSAGE = "[ERROR] 음수를 입력할 수 없습니다";
    private static final int ERROR_CRITERIA_VALUE_ZERO = 0;

    private Cars cars;

    public void createCars(String carNames) {
        cars = new Cars(CarFactory.from(carNames));
    }

    public int createGameCount(int gameCount) {
        return validateGameCount(gameCount);
    }

    private int validateGameCount(int gameCount) {
        if (gameCount < ERROR_CRITERIA_VALUE_ZERO) {
            throw new IllegalArgumentException(NEGATIVE_ERROR_MESSAGE);
        }
        return gameCount;
    }

    public TotalCarsDto play(int gameCount) {
        List<CarsDto> carsDtos = new ArrayList<>();
        for (int i = 0; i < gameCount; i++) {
            carsDtos.add(cars.move(new RandomNumberGenerator()));
        }
        WinnerCarsDto winnerCarsDto = cars.judgeWinner();
        return new TotalCarsDto(carsDtos, winnerCarsDto);
    }
}
```

이렇게 코드를 짜보니 Controller의 역할에 더 실감할 수 있었다.
View와 데이터를 주고 받으며 Car 객체들을 만들고 움직이게하고 우승자를 판정하는 등의 비즈니스 로직들을 실행시키는 역할을 하는 것이다.
Controller는 외부에서 요청이 들어오는 것을 처리해주고, View에서 필요한 데이터들을 보내주는 역할을 한다.
