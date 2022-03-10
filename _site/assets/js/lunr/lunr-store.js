var store = [{
        "title": "JDK, JRE, JVM",
        "excerpt":"JDK (Java Development Kit) JDK란 Java를 활용하여 프로그램을 개발할 때 필요한 도구 모음이다. JRE는 Java 프로그램을 실행하기 위한 도구들의 구성요소로 독립적으로 사용 가능하다. 하지만 프로그램을 실행시키는 것도 개발의 일환이기 때문에 JDK는 JRE를 필요로 한다. JDK 구성요소 javac : 자바 컴파일러. 자바 소스파일을 바이트코드로 반환 jdb : 자바 디버깅 툴 jar...","categories": ["java"],
        "tags": [],
        "url": "/java/JDK,JRE,JVM/",
        "teaser": null
      },{
        "title": "Junit",
        "excerpt":"우테코 첫 미션으로 TDD 기법을 사용해 자동차 경주 게임을 구현한다. 이전에 프로덕션 코드를 작성하고 간단한 단위 테스트 코드를 작성한 적은 있지만 TDD는 처음이다. 지금까지는 Junit은 테스트 코드를 작성하게 지원해주는 라이브러리 정도라고만 알고 있었는데, Junit에 대해 궁금증이 생겨 정리해보았다. Junit5 Junit5는 이전 버전과 다르게 세개의 서브 프로젝트로 이루어져 있다. Junit5은 Junit...","categories": ["til"],
        "tags": [],
        "url": "/til/Junit/",
        "teaser": null
      },{
        "title": "정규표현식, 팩토리 메서드 패턴, 유틸 클래스",
        "excerpt":"정규 표현식 정적 팩토리 메서드 패턴 페어 프로그래밍을 하면서, 페어분이 팩토리 메서드 패턴에 대해 소개해주셔서 처음 사용해보게 되었다. 정적 팩토리 메서드란 객체 생성의 역할을 하는 클래스 메서드(static 메서드) 라고 할 수 있다. 직접적인 생성자를 통해 객체를 생성하는 것이 아닌 메서드를 통해서 객체 생성하는 것을 정적 팩토리 메서드라고 한다. 팩토리 메서드...","categories": ["til","java"],
        "tags": [],
        "url": "/til/java/%EC%A0%95%EA%B7%9C-%ED%91%9C%ED%98%84%EC%8B%9D,-%ED%8C%A9%ED%86%A0%EB%A6%AC-%EB%A9%94%EC%84%9C%EB%93%9C-%ED%8C%A8%ED%84%B4,-%EC%9C%A0%ED%8B%B8-%ED%81%B4%EB%9E%98%EC%8A%A4/",
        "teaser": null
      },{
        "title": "상대방 커밋 이력 가져오기",
        "excerpt":"상대방 커밋 이력과 코드 가져오기 git remote add 축약할 이름 가져올 상대의 저장소 내 Local git과 가져올 Github의 저장소의 주소를 연결시켜주기 위해 이 작업이 필요하다. 축약할 이름은 자기가 편한 이름으로 지어주면 된다. 보통 자주 사용하는 origin도 하나의 이름이다. git clone 을 하면 자동으로 clone 한 저장소와 연결이 된다. 그 때,...","categories": ["til","java"],
        "tags": [],
        "url": "/til/java/%EC%8A%A4%ED%8A%B8%EB%A6%BC-joining,-%EC%83%81%EB%8C%80%EB%B0%A9-%EC%BB%A4%EB%B0%8B-%EC%9D%B4%EB%A0%A5-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0/",
        "teaser": null
      },{
        "title": "Java 8에서는 무슨일이 일어났는가?",
        "excerpt":"자바 8, 9, 10, 11 무슨일이 일어나고 있는가 자바 8은 간결한 코드, 멀티코어 프로세서의 쉬운 활용이라는 두 가지 요구사항을 기반으로 한다. 자바 8이 등장하기 이전의 자바 프로그램은 코어 중 하나만을 사용했다. 그래서 나머지 코어를 활용하려면 스레드를 사용하는 것이 좋다는 말이 있었다. 하지만 스레드를 사용하면 관리하기 어렵고 많은 문제가 발생할 수...","categories": ["java"],
        "tags": [],
        "url": "/java/%EC%9E%90%EB%B0%94-8%EC%97%90%EC%84%9C%EB%8A%94-%EB%AC%B4%EC%8A%A8%EC%9D%BC%EC%9D%B4-%EC%9D%BC%EC%96%B4%EB%82%AC%EB%8A%94%EA%B0%80/",
        "teaser": null
      },{
        "title": "함수 vs 메서드 , TDA 법칙",
        "excerpt":"함수 vs 메서드 모던 자바 인 액션을 읽는 중, 책에서 설명을 할 때 메서드와 함수를 다른 의미로 사용하는 듯 했다. 함수와 메서드는 같은 의미지 않나라는 생각이 들었고, java 공부를 시작하면서 함수라는 단어는 사용을 잘 안 한듯한 느낌이 들었다. 함수와 메서드의 용어에 대해서 생각해보게 되었다. 함수 프로그래밍 언어에 있어서 함수라는 것은...","categories": ["java","til"],
        "tags": [],
        "url": "/java/til/%ED%95%A8%EC%88%98-vs-%EB%A9%94%EC%84%9C%EB%93%9C/",
        "teaser": null
      },{
        "title": "인스턴스 메서드 vs 클래스 메서드",
        "excerpt":"static 메서드는 언제 사용해야 하나? 평소에 static 메서드의 사용 여부에 대해 많이 고민이 되는 것 같다. 자동차 경주 게임 미션을 하면서도, 고민이 되는 경우가 있었다. 일단, 게임에 있어서 판정을 해주는 Referee 클래스 이다. public class Referee { private static final int MOVE_CRITERIA = 4; public static boolean canCarMove(int randomValue) {...","categories": ["java","til"],
        "tags": [],
        "url": "/java/til/%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4-%EB%A9%94%EC%84%9C%EB%93%9C-vs-%ED%81%B4%EB%9E%98%EC%8A%A4-%EB%A9%94%EC%84%9C%EB%93%9C/",
        "teaser": null
      },{
        "title": "일급 컬렉션",
        "excerpt":"일급 컬렉션이란 Collection을 Wrapping 하는 것으로 Collection 이외에 멤버 변수가 없는 것을 일급 컬렉션이라고 한다. public class Cars { private static final String DUPLICATED_NAME_ERROR = \"[ERROR] 차 이름은 중복될 수 없습니다.\"; private final List&lt;Car&gt; cars; public Cars(List&lt;Car&gt; carList) { validateDuplicatedCarName(carList); cars = carList; } ... } 일급 컬렉션을 사용하면, 자동차...","categories": ["java","til"],
        "tags": [],
        "url": "/java/til/%EC%9D%BC%EA%B8%89-%EC%BB%AC%EB%A0%89%EC%85%98/",
        "teaser": null
      },{
        "title": "원시값 포장",
        "excerpt":"원시값 포장하기 자동차 경주 게임의 요구사항 중, 자동차의 이름은 5글자를 초과할 수 없다. 라는 규칙이 있다. 또한 자동차의 이름은 비어있는 값이 될 수 없다. 최소 1글자는 되어야 한다. 사용자가 입력하는 이름에 따라, Car 객체 생성 전에 이름에 대한 검증이 필요하다. public class Car { private static final int MAX_NAME_LENGTH =...","categories": ["java","til"],
        "tags": [],
        "url": "/java/til/%EC%9B%90%EC%8B%9C%EA%B0%92-%ED%8F%AC%EC%9E%A5/",
        "teaser": null
      },{
        "title": "인터페이스를 분리해 테스트 코드 하기 좋은 메서드로 만들기",
        "excerpt":"전략 패턴을 사용하여 테스트 하기 자동차 경주 게임 에서, 자동차는 부여받는 Random 값이 4이상일 경우, 전진할 수 있고, 4 미만일 경우에는 전진하지 못한다라는 요구 사항이 있다. 랜덤값 같은 테스트하기 어려운 대상에 대해, 테스트 코드를 작성하기 쉬운 메서드로 만드는 방법은 테스트하기 어려운 대상을 매개변수를 통해 전달받도록 수정하여 메서드가 직접적인 의존을 가지지...","categories": ["java","til"],
        "tags": [],
        "url": "/java/til/%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%A5%BC-%EB%B6%84%EB%A6%AC%ED%95%B4-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%ED%95%98%EA%B8%B0-%EC%A2%8B%EC%9D%80-%EB%A9%94%EC%84%9C%EB%93%9C%EB%A1%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0/",
        "teaser": null
      },{
        "title": "웹이란 무엇인가",
        "excerpt":"모든 것의 기반인 웹 10년 전 가장 중요한 소프트웨어 : 워드 프로세서, ERP, MIS 현재 가장 중요한 소프트웨어 : 웹을 열람하는 브라우저 브라우저를 통해 다양한 용도로 컴퓨터를 활용한다. 브라우저는 웹 서버와 통신을 하면서 실현되고 있다. 다양한 웹의 용도 웹의 용도는 다양한 분야에 걸쳐 있는데, 웹의 용도를 3가지로 나눌 수 있다....","categories": ["web"],
        "tags": [],
        "url": "/web/%EC%9B%B9%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80/",
        "teaser": null
      },{
        "title": "Controller는 무슨 역할을 하는가?",
        "excerpt":"Controller는 무슨일을 하는가? 항상 Controller의 로직을 짤 때마다, 의문이 들었다. Controller는 인스턴스의 상태를 가지고 있지 않기 때문에 유틸리티 클래스로 만들어줘도 되지 않을까? Controller 같이 모든 코드를 조립해주는 클래스들을 어떻게 해야 더 객체지향적인 코드로 설계할 수 있을까? 리뷰어님께 이러한 궁금증들을 여쭤보게 되었고, View가 Controller로 넘어와도 될까요? 라는 역질문을 받게 되었다. public...","categories": ["java","til"],
        "tags": [],
        "url": "/java/til/Controller%EB%8A%94-%EB%AC%B4%EC%8A%A8-%EC%97%AD%ED%95%A0%EC%9D%84-%ED%95%A0%EA%B9%8C/",
        "teaser": null
      },{
        "title": "동작 파라미터화 코드 전달하기",
        "excerpt":"동작 파라미터화 코드 전달하기 소비자 요구사항은 항상 바뀌고, 변화하는 요구 사항은 소프트웨어 엔지니어링에서 피할 수 없는 문제다. 그러면 시시각각 변하는 사용자 요구 사항에 어떻게 대응해야 할까? 엔지니어링적인 비용이 가장 최소화 될 수 있어야 하고, 유지보수가 쉬워야 한다. 동작 파라미터화를 이용하면 자주 바뀌는 요구사항에 효과적으로 대응할 수 있다. 동작 파라미터화란 아직은...","categories": ["java"],
        "tags": [],
        "url": "/java/%EB%8F%99%EC%9E%91-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0%ED%99%94-%EC%BD%94%EB%93%9C-%EC%A0%84%EB%8B%AC%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "캐싱 기법",
        "excerpt":"캐싱이란 캐시는 컴퓨터 과학에서 데이터나 값을 미리 복사해 놓는 임시 장소를 가리킨다. 캐시는 데이터를 접근해 시간이 오래 걸리는 경우나 다시 계산하는 시간을 절약하고 싶은 경우에 사용한다. 캐시에 데이터를 미리 복사해 놓으면 계산이나 접근 시간 없이 더 빠른 속도로 데이터에 접근할 수 있다. Java Wrapper Class Java에서는 원시 타입을 참조 타입으로...","categories": ["java","til"],
        "tags": [],
        "url": "/java/til/%EC%BA%90%EC%8B%B1-%EA%B8%B0%EB%B2%95/",
        "teaser": null
      },{
        "title": "Enum이란?",
        "excerpt":" ","categories": ["java"],
        "tags": [],
        "url": "/java/Enum%EC%9D%B4%EB%9E%80/",
        "teaser": null
      },{
        "title": "싱글턴 패턴",
        "excerpt":"View는 유틸리티 클래스로? 싱글턴 패턴으로? 상태가 없는 클래스들은 모든 메서드를 static 으로 선언하여 유틸리티 클래스로 만들어준다. 하지만 static 메서드가 많아 지게 되면 메모리 측면에서 안 좋아진다. static 메서드들은 프로그램이 종료할 때까지 static영역에 남아있다. 하지만 상태가 없다고 유틸리티 클래스로 만들기는 무리다. Controller도 무상태 객체이고 static은 객체 지향 보다는 절차 지향에 가까운...","categories": ["java","til"],
        "tags": [],
        "url": "/java/til/%EC%8B%B1%EA%B8%80%ED%84%B4-%ED%8C%A8%ED%84%B4/",
        "teaser": null
      },{
        "title": "웹의 역사",
        "excerpt":"웹의 역사 웹 이전의 인터넷 초기의 인터네에는 웹이 없었다. 인터넷의 기원은 1969년에 구축된 ARPANET 까지 거슬러 올라간다. ARPANET은 Advanced Research Project Agency에서 구축한 컴퓨터 네트워크다. ARPANET은 미국 내 대학과 연구기관 사이를 고속 회선으로 접속하고, 전 미국을 연결하는 네트워크로서 서서히 성장해갔다. 웹 이전의 역사는 브라이언 캐니핸이 이시다 교수에게 보낸 전자메일에서 엿...","categories": ["web"],
        "tags": [],
        "url": "/web/%EC%9B%B9%EC%9D%98-%EC%97%AD%EC%82%AC/",
        "teaser": null
      },{
        "title": "람다 표현식",
        "excerpt":"람다 표현식 익명 클래스로 다양한 동작을 구현할 수 있지만 만족할 만큼 코드가 깔끔하지는 않았다. 깔끔하지 않은 코드는 동작 파라미터를 실전에 적용하는 것을 막는 요소다. 람다 표현식은 익명 클래스처럼 이름이 없는 함수면서 메서드를 인수로 전달할 수 있으므로 람다와 익명클래스는 비슷한 개념이다. 람다란 무엇인가? 람다 표현식은 메서드로 전달할 수 있는 익명 함수를...","categories": ["java"],
        "tags": [],
        "url": "/java/%EB%9E%8C%EB%8B%A4-%ED%91%9C%ED%98%84%EC%8B%9D/",
        "teaser": null
      },{
        "title": "REST웹의 아키텍처 스타일",
        "excerpt":"아키텍처 스타일의 중요성 REST는 웹의 아키텍처 스타일이다. 아키텍처 스타일은 아키텍처 패턴이라고도 하며, 복수의 아키텍처의 공통된 성질, 양식 등을 가리키는 말이다. 아키텍처 스타일에는 MVC와 파이프 앤 필터, 이벤트 시스템 등이 있다. 디자인 패턴은 마이크로 아키텍처 패턴이라고도 칭하며, 아키텍처 스타일보다 입도가 작은 클래스 등의 설게양식을 가리킨다. 디자인과 디자인 패턴이 다르듯, 아키텍처와 아키텍처...","categories": ["web"],
        "tags": [],
        "url": "/web/REST%EC%9B%B9%EC%9D%98-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98-%EC%8A%A4%ED%83%80%EC%9D%BC/",
        "teaser": null
      },{
        "title": "람다 표현식(2)",
        "excerpt":"메서드 참조 메서드 참조를 이용하면 기존의 메서드 정의를 재활용하여 람다처럼 전달할 수 있다. inventory.sort((Apple a1, Apple a2) -&gt; a1.getWeight().compareTo(a2.getWeight())); inventory.sort(comparing(Apple::getWeight)); 메서드 참조는 특정 메서드만을 호출하는 람다의 축약형이다. 메서드를 어떻게 호출하는지 설명하는 것이 아닌 ‘이 메서드를 직접 호출해’라고 명령하는 느낌이다. 명시적으로 메서드명을 참조함으로써 가독성을 높여줄 수 있다. 메서드명 앞에 ::를 붙이는...","categories": ["java"],
        "tags": [],
        "url": "/java/%EB%9E%8C%EB%8B%A4-%ED%91%9C%ED%98%84%EC%8B%9D(2)/",
        "teaser": null
      },{
        "title": "협력하는 객체들의 공동체",
        "excerpt":"객체지향이란 뭘까? 객체지향이란 실세계를 직접적이고 직관적으로 모델링할 수 있는 패러다임이라고들 한다. 현실 세계를 최대한 유사하게 모방해 소프트웨어 내부로 옮겨오는 작업이라는 것인데, 과연 이게 맞는 말일까? 철학적인 개념을 설명하는 것은 적합하나 객체 지향 분석, 설계를 설명하기에는 적합하지 않다. 객체와 사물간의 개념적 거리는 유사성을 찾기 어려울 정도로 매우 멀다. ex) 실세계에서의 방화벽,...","categories": ["java"],
        "tags": [],
        "url": "/java/%ED%98%91%EB%A0%A5%ED%95%98%EB%8A%94-%EA%B0%9D%EC%B2%B4%EB%93%A4%EC%9D%98-%EA%B3%B5%EB%8F%99%EC%B2%B4/",
        "teaser": null
      }]
