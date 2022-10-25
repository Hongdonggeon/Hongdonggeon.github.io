var store = [{
        "title": "JDK, JRE, JVM",
        "excerpt":"JDK (Java Development Kit) JDK란 Java를 활용하여 프로그램을 개발할 때 필요한 도구 모음이다. JRE는 Java 프로그램을 실행하기 위한 도구들의 구성요소로 독립적으로 사용 가능하다. 하지만 프로그램을 실행시키는 것도 개발의 일환이기 때문에 JDK는 JRE를 필요로 한다. JDK 구성요소 javac : 자바 컴파일러. 자바 소스파일을 바이트코드로 반환 jdb : 자바 디버깅 툴 jar...","categories": ["java"],
        "tags": [],
        "url": "/java/JDK,JRE,JVM/",
        "teaser": null
      },{
        "title": "Junit",
        "excerpt":"우테코 첫 미션으로 TDD 기법을 사용해 자동차 경주 게임을 구현한다. 이전에 프로덕션 코드를 작성하고 간단한 단위 테스트 코드를 작성한 적은 있지만 TDD는 처음이다. 지금까지는 Junit은 테스트 코드를 작성하게 지원해주는 라이브러리 정도라고만 알고 있었는데, Junit에 대해 궁금증이 생겨 정리해보았다. Junit5 Junit5는 이전 버전과 다르게 세개의 서브 프로젝트로 이루어져 있다. Junit5은 Junit...","categories": ["java"],
        "tags": [],
        "url": "/java/Junit/",
        "teaser": null
      },{
        "title": "팩토리 메서드 패턴, 유틸 클래스",
        "excerpt":"정적 팩토리 메서드 패턴 페어 프로그래밍을 하면서, 페어분이 팩토리 메서드 패턴에 대해 소개해주셔서 처음 사용해보게 되었다. 정적 팩토리 메서드란 객체 생성의 역할을 하는 클래스 메서드(static 메서드) 라고 할 수 있다. 직접적인 생성자를 통해 객체를 생성하는 것이 아닌 메서드를 통해서 객체 생성하는 것을 정적 팩토리 메서드라고 한다. 팩토리 메서드 패턴을 사용하여...","categories": ["java"],
        "tags": [],
        "url": "/java/%ED%8C%A9%ED%86%A0%EB%A6%AC-%EB%A9%94%EC%84%9C%EB%93%9C-%ED%8C%A8%ED%84%B4,-%EC%9C%A0%ED%8B%B8-%ED%81%B4%EB%9E%98%EC%8A%A4/",
        "teaser": null
      },{
        "title": "상대방 커밋 이력 가져오기",
        "excerpt":"상대방 커밋 이력과 코드 가져오기 git remote add 축약할 이름 가져올 상대의 저장소 내 Local git과 가져올 Github의 저장소의 주소를 연결시켜주기 위해 이 작업이 필요하다. 축약할 이름은 자기가 편한 이름으로 지어주면 된다. 보통 자주 사용하는 origin도 하나의 이름이다. git clone 을 하면 자동으로 clone 한 저장소와 연결이 된다. 그 때,...","categories": ["github"],
        "tags": [],
        "url": "/github/%EC%8A%A4%ED%8A%B8%EB%A6%BC-joining,-%EC%83%81%EB%8C%80%EB%B0%A9-%EC%BB%A4%EB%B0%8B-%EC%9D%B4%EB%A0%A5-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0/",
        "teaser": null
      },{
        "title": "함수 vs 메서드 , TDA 법칙",
        "excerpt":"함수 vs 메서드 모던 자바 인 액션을 읽는 중, 책에서 설명을 할 때 메서드와 함수를 다른 의미로 사용하는 듯 했다. 함수와 메서드는 같은 의미지 않나라는 생각이 들었고, java 공부를 시작하면서 함수라는 단어는 사용을 잘 안 한듯한 느낌이 들었다. 함수와 메서드의 용어에 대해서 생각해보게 되었다. 함수 프로그래밍 언어에 있어서 함수라는 것은...","categories": ["java"],
        "tags": [],
        "url": "/java/%ED%95%A8%EC%88%98-vs-%EB%A9%94%EC%84%9C%EB%93%9C/",
        "teaser": null
      },{
        "title": "인스턴스 메서드 vs 클래스 메서드",
        "excerpt":"static 메서드는 언제 사용해야 하나? 평소에 static 메서드의 사용 여부에 대해 많이 고민이 되는 것 같다. 자동차 경주 게임 미션을 하면서도, 고민이 되는 경우가 있었다. 일단, 게임에 있어서 판정을 해주는 Referee 클래스 이다. public class Referee { private static final int MOVE_CRITERIA = 4; public static boolean canCarMove(int randomValue) {...","categories": ["java"],
        "tags": [],
        "url": "/java/%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4-%EB%A9%94%EC%84%9C%EB%93%9C-vs-%ED%81%B4%EB%9E%98%EC%8A%A4-%EB%A9%94%EC%84%9C%EB%93%9C/",
        "teaser": null
      },{
        "title": "일급 컬렉션",
        "excerpt":"일급 컬렉션이란 Collection을 Wrapping 하는 것으로 Collection 이외에 멤버 변수가 없는 것을 일급 컬렉션이라고 한다. public class Cars { private static final String DUPLICATED_NAME_ERROR = \"[ERROR] 차 이름은 중복될 수 없습니다.\"; private final List&lt;Car&gt; cars; public Cars(List&lt;Car&gt; carList) { validateDuplicatedCarName(carList); cars = carList; } ... } 일급 컬렉션을 사용하면, 자동차...","categories": ["java"],
        "tags": [],
        "url": "/java/%EC%9D%BC%EA%B8%89-%EC%BB%AC%EB%A0%89%EC%85%98/",
        "teaser": null
      },{
        "title": "원시값 포장",
        "excerpt":"원시값 포장하기 자동차 경주 게임의 요구사항 중, 자동차의 이름은 5글자를 초과할 수 없다. 라는 규칙이 있다. 또한 자동차의 이름은 비어있는 값이 될 수 없다. 최소 1글자는 되어야 한다. 사용자가 입력하는 이름에 따라, Car 객체 생성 전에 이름에 대한 검증이 필요하다. public class Car { private static final int MAX_NAME_LENGTH =...","categories": ["java"],
        "tags": [],
        "url": "/java/%EC%9B%90%EC%8B%9C%EA%B0%92-%ED%8F%AC%EC%9E%A5/",
        "teaser": null
      },{
        "title": "인터페이스를 분리해 테스트 코드 하기 좋은 메서드로 만들기",
        "excerpt":"전략 패턴을 사용하여 테스트 하기 자동차 경주 게임 에서, 자동차는 부여받는 Random 값이 4이상일 경우, 전진할 수 있고, 4 미만일 경우에는 전진하지 못한다라는 요구 사항이 있다. 랜덤값 같은 테스트하기 어려운 대상에 대해, 테스트 코드를 작성하기 쉬운 메서드로 만드는 방법은 테스트하기 어려운 대상을 매개변수를 통해 전달받도록 수정하여 메서드가 직접적인 의존을 가지지...","categories": ["java"],
        "tags": [],
        "url": "/java/%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%A5%BC-%EB%B6%84%EB%A6%AC%ED%95%B4-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%ED%95%98%EA%B8%B0-%EC%A2%8B%EC%9D%80-%EB%A9%94%EC%84%9C%EB%93%9C%EB%A1%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0/",
        "teaser": null
      },{
        "title": "Controller는 무슨 역할을 하는가?",
        "excerpt":"Controller는 무슨일을 하는가? 항상 Controller의 로직을 짤 때마다, 의문이 들었다. Controller는 인스턴스의 상태를 가지고 있지 않기 때문에 유틸리티 클래스로 만들어줘도 되지 않을까? Controller 같이 모든 코드를 조립해주는 클래스들을 어떻게 해야 더 객체지향적인 코드로 설계할 수 있을까? 리뷰어님께 이러한 궁금증들을 여쭤보게 되었고, View가 Controller로 넘어와도 될까요? 라는 역질문을 받게 되었다. public...","categories": ["java"],
        "tags": [],
        "url": "/java/Controller%EB%8A%94-%EB%AC%B4%EC%8A%A8-%EC%97%AD%ED%95%A0%EC%9D%84-%ED%95%A0%EA%B9%8C/",
        "teaser": null
      },{
        "title": "캐싱 기법",
        "excerpt":"캐싱이란 캐시는 컴퓨터 과학에서 데이터나 값을 미리 복사해 놓는 임시 장소를 가리킨다. 캐시는 데이터를 접근해 시간이 오래 걸리는 경우나 다시 계산하는 시간을 절약하고 싶은 경우에 사용한다. 캐시에 데이터를 미리 복사해 놓으면 계산이나 접근 시간 없이 더 빠른 속도로 데이터에 접근할 수 있다. Java Wrapper Class Java에서는 원시 타입을 참조 타입으로...","categories": ["java"],
        "tags": [],
        "url": "/java/%EC%BA%90%EC%8B%B1-%EA%B8%B0%EB%B2%95/",
        "teaser": null
      },{
        "title": "싱글턴 패턴",
        "excerpt":"View는 유틸리티 클래스로? 싱글턴 패턴으로? 상태가 없는 클래스들은 모든 메서드를 static 으로 선언하여 유틸리티 클래스로 만들어준다. 하지만 static 메서드가 많아 지게 되면 메모리 측면에서 안 좋아진다. static 메서드들은 프로그램이 종료할 때까지 static영역에 남아있다. 하지만 상태가 없다고 유틸리티 클래스로 만들기는 무리다. Controller도 무상태 객체이고 static은 객체 지향 보다는 절차 지향에 가까운...","categories": ["java"],
        "tags": [],
        "url": "/java/%EC%8B%B1%EA%B8%80%ED%84%B4-%ED%8C%A8%ED%84%B4/",
        "teaser": null
      },{
        "title": "절차지향 vs 객체지향",
        "excerpt":"절차지향 vs 객체지향 절차 지향 프로시저로 프로그램을 구성하는 기법을 절차 지향 프로그래밍이라고 부른다. 프로시저는 데이터를 사용해서 기능을 구현한다. 프로시저는 다른 프로시저를 사용하기도 한다. 여러 프로시저가 동일한 데이터를 공유한다. 다수의 프로시저들이 데이터를 공유하는 방식으로 만들어지기 때문에, 절차 지향 프로그램은 자연스럽게 데이터를 중심으로 구현하게 된다. 절차 지향의 문제점 데이터 타입이나 의미를 변경해야...","categories": ["java"],
        "tags": [],
        "url": "/java/%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5%EA%B3%BC-%EC%A0%88%EC%B0%A8%EC%A7%80%ED%96%A5/",
        "teaser": null
      },{
        "title": "방어적 복사",
        "excerpt":"방어적 복사란 생성자를 통해 초기화 할 때, 새로운 객체로 감싸서 복사해주는 방법이다. 외부와 내부에서 주소값을 공유하는 인스턴스의 관계를 끊어주기 위함이다. 방어적 복사를 하지 않는다면, 외부(원본) List에서 리스트에 값을 추가할 시, 내부의 List에도 값이 추가 될 것이다. 방어적 복사를 하지 않은 경우 public final class Cards { private final List&lt;Card&gt; cards;...","categories": ["java"],
        "tags": [],
        "url": "/java/%EB%B0%A9%EC%96%B4%EC%A0%81-%EB%B3%B5%EC%82%AC%EB%9E%80/",
        "teaser": null
      },{
        "title": "Collections.unmodifiableList() vs List.copyOf()",
        "excerpt":"이전 내용을 간략하게 요약해보자. 인자로 들어올 원본 List의 변화가 객체 내부 필드의 변화까지 일어나지 않게 하기 위해 방어적 복사를 해주었다. 방어적 복사를 하게 되면, 원본 List와 객체 내부 필드의 참조 값이 달라지면서, 외부의 변화에 대해 막아줄 수 있었다. public final class Cards { private final List&lt;Card&gt; cards; public Cards(List&lt;Card&gt; initialCards)...","categories": ["java"],
        "tags": [],
        "url": "/java/copyOf()vsUnmodifiable/",
        "teaser": null
      },{
        "title": "JDBC란",
        "excerpt":"JDBC란 JDBC(Java DataBase Connectivity)는 자바 프로그램에서 Database를 조작하게 해주는 API이다. JDBC API는 JDK에서 제공하며 JDBC 프로그래밍을 위해서는 JDBC드라이버가 필요하다. JDBC 드라이버는 각 DBMS 회사에서 제공하는 라이브러리 압축파일이다. 이번 체스 미션에서는 MySQL을 사용하기 때문에, MySQL 드라이버를 사용했다. JDBD API 클래스 JDBC 클래스와 인터페이스는 자바 패키지 java.sql과 javax.sql에 포함되어 있다. JDBC를 이용한...","categories": ["java"],
        "tags": [],
        "url": "/java/JDBC%EB%9E%80/",
        "teaser": null
      },{
        "title": "테스트 범위에 따른 테스트 종류",
        "excerpt":"테스트의 범위는 테스트의 목적과 수행하는 사람에 따라 달라진다. 일반적인 웹 어플리케이션에서 테스트 범위에 따른 테스트 종류는 아래의 그림과 같이 세 가지로 나눌 수 있다. 기능 테스트와 E2E 테스트 기능 테스트는 사용자 입장에서 시스템이 제공하는 기능이 올바르게 동작하는지 확인한다. 기능 테스트를 수행하려면 시스템을 구동하고 사용하는데 필요한 모든 구성 요소가 필요하다. 기능...","categories": ["java"],
        "tags": [],
        "url": "/java/%ED%85%8C%EC%8A%A4%ED%8A%B8-%EB%B2%94%EC%9C%84%EC%97%90-%EB%94%B0%EB%A5%B8-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%A2%85%EB%A5%98/",
        "teaser": null
      },{
        "title": "스프링 컨테이너",
        "excerpt":"스프링 컨테이너 스프링 컨테이너란? 스프링 컨테이너는 스프링 빈의 생명 주기를 관리하여 IoC(제어역전)와 DI(의존성주입)을 제공해주는 역할을 한다. 스프링 컨테이너는 Bean Factory와 이를 상속한 ApplicationContext 2가지 유형이 존재한다. Bean Factory Bean Factory는 스프링 컨테이너의 최상위 인터페이스로 스프링 컨테이너 설정파일에 등록된 Bean 객체를 생성하고 관리하는 기본적인 기능만 담당하는 IoC 컨테이너이자 클래스를 말한다. 컨테이너가...","categories": [],
        "tags": [],
        "url": "/%EC%8A%A4%ED%94%84%EB%A7%81-%EC%BB%A8%ED%85%8C%EC%9D%B4%EB%84%88/",
        "teaser": null
      },{
        "title": "웹 어플리케이션 서버",
        "excerpt":"웹은 HTTP 기반으로 통신한다. 클라이언트에서 서버로 데이터를 전송할 때, 서버에서 클라이언트로 데이터를 응답할 때 모두 HTTP 프로토콜 기반으로 동작한다. 웹 서버 HTTP 기반으로 동작 정적 리소스 제공, 기타 부가기능 정적인 파일을 제공하므로 HTML 을 특정 사용자마다 다르게 보여줄 수 있음 정적 HTML, CSS, JS, 이미지, 영상 웹 서버에서 요청에 알맞은...","categories": ["spring"],
        "tags": [],
        "url": "/spring/%EC%9B%B9-%EC%96%B4%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-%EC%84%9C%EB%B2%84/",
        "teaser": null
      },{
        "title": "서블릿",
        "excerpt":"서블릿 서블릿 이전의 CGI 이전의 웹 프로그램들은 클라이언트의 요청에 대한 응답으로 정적인 리소스만 넘겨주었다. 웹 프로그래밍은 점점 발전하게 되었고, 사용자의 요청에 맞게 동적인 페이지를 작성할 수 있게 되었는데 이 역할을 CGI라는 인터페이스가 해주었다. 하지만 CGI는 단점이 있었다. CGI는 클라이언트에서 요청이 올 때마다 각각에 대한 처리 프로세스를 만들어냈다. 들어오는 요청들이 같은...","categories": ["spring"],
        "tags": [],
        "url": "/spring/%EC%84%9C%EB%B8%94%EB%A6%BF/",
        "teaser": null
      },{
        "title": "MVC 구조",
        "excerpt":"MVC 구조 동작 순서 DispatcherServlet으로 클라이언트의 웹 요청이 들어온다. 웹 요청을 핸들러 매핑에 위임해 요청 URL에 매핑된 핸들러를 조회한다. 핸들러를 실행할 수 있는 핸들러 어댑터를 조회한다. 핸들러 어댑터가 실행되고 핸들러 어댑터가 핸들러를 실행시킨다. 이때 핸들러가 반환한 정보를 핸들러 어댑터가 ModelAndView로 변환해서 반환한다. 뷰 리졸버가 뷰 이름을 전달받아 뷰 리졸버는 뷰의...","categories": ["spring"],
        "tags": [],
        "url": "/spring/MVC-%EA%B5%AC%EC%A1%B0/",
        "teaser": null
      },{
        "title": "스프링 빈",
        "excerpt":"스프링 빈 스프링 컨테이너에서 관리하는 자바 객체를 스프링 빈이라고 한다. 조금 더 자세하게 설명하자면, 기존에 Java 프로그램에서는 객체를 생성할 때 우리가 직접 new 생성자를 입력해 객체를 생성하였지만, 우리가 직접 객체를 생성하는 것이 아닌 Spring에 의해 생성되고 관리되는 자바 객체를 스프링 빈이라고 한다. 그럼 스프링 컨테이너에는 빈을 등록하는 방법들에 대해 알아보자....","categories": ["spring"],
        "tags": [],
        "url": "/spring/%EC%8A%A4%ED%94%84%EB%A7%81-%EB%B9%88/",
        "teaser": null
      },{
        "title": "영속성 컨텍스트의 특징",
        "excerpt":"1차 캐시 영속성 컨텍스트는 내부에 캐시를 가지고 있다. 쉽게 이야기해서 영속성 컨텍스트 내부에 엔티티를 보관하고 있는 Map이 하나 있다고 생각하면 된다. 1차 캐시의 키는 식별자 값인데, 식별자 값은 우리가 엔티티를 정의할 때 @Id 를 붙인 필드다. 따라서 영속성 컨텍스트에 데이터를 저장하고 조회하는 모든 기준은 데이터베이스 기본 키 값이다. 1차 캐시의...","categories": ["jpa"],
        "tags": [],
        "url": "/jpa/%EC%98%81%EC%86%8D%EC%84%B1-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8%EC%9D%98-%ED%8A%B9%EC%A7%95/",
        "teaser": null
      },{
        "title": "JPQL과 페치 조인",
        "excerpt":"JPQL이란 JPQL(Java PErsistence Query Language)은 엔티티 객체를 조회하는 객체지향 쿼리다. JPQL은 SQL을 추상화해서 특정 데이터베이스에 의존하지 않는다. 데이터베이스 방언을 변경하면 JPQL을 수정하지 않고도 데이터베이스를 변경할 수 있다. 왜냐하면 JPQL이 제공하는 표준화된 함수를 사용하면 선택한 방언에 따라 해당 데이터베이스에 맞춘 적절한 SQL 함수가 실행되기 때문이다. JPQL 페치 조인 일반적인 SQL에서 이야기하는...","categories": ["jpa"],
        "tags": [],
        "url": "/jpa/JPQL%EA%B3%BC-%ED%8E%98%EC%B9%98%EC%A1%B0%EC%9D%B8/",
        "teaser": null
      },{
        "title": "JPQL 벌크 연산을 주의하자",
        "excerpt":"JPQL 벌크 연산 엔티티를 수정하려면 영속성 컨텍스트의 변경 감지 기능이나, 삭제하려면 entityManger.remove() 메서드를 사용할 수 있다. 하지만 이 방법으로 수백 개 이상의 엔티티를 하나씩 처리하기에는 시간이 너무 오래 걸린다. 이럴 때 여러 건을 한번에 수정하거나 삭제하는 벌크 연산을 사용할 수 있다. 벌크 연산의 주의점 하지만 벌크 연산을 사용할 때는 벌크...","categories": ["jpa"],
        "tags": [],
        "url": "/jpa/JPQL-%EB%B2%8C%ED%81%AC-%EC%97%B0%EC%82%B0/",
        "teaser": null
      },{
        "title": "aws ec2 살펴보기1 (리전, 가용 영역)",
        "excerpt":"리전 aws 리전이란 aws 리소스를 지리적 관점으로 영역으로 구분해놓은 것이다. 각 aws 리전은 격리되어 있고 독립적이다. 내가 만약 서울 리전에서 리소스를 만들었다면 미국 동부(오하이오) 리전에서 사용할 수 없다. 리전은 전 세계적으로 여러 곳에 존재하고 있기 때문에 재해 발생시에도 서비스를 공급할 수 있고 사용자는 자신의 위치와 가장 가까운 리전을 선택함으로서 빠른...","categories": ["infra"],
        "tags": [],
        "url": "/infra/aws-ec2-%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B01-(%EB%A6%AC%EC%A0%84,-%EA%B0%80%EC%9A%A9-%EC%98%81%EC%97%AD)/",
        "teaser": null
      },{
        "title": "인수테스트 격리하기",
        "excerpt":"인수테스트란 사용자 시나리오에 맞춰서 실제 운영 환경에서 사용될 준비가 되었는지를 통합적으로 확인하는 테스트다. 인수 테스트의 목적이 실제 운영 환경과 같은 조건을 테스트하고자 하는 것이기 때문에 mock 프레임워크 등을 사용하지 않고 실제 데이터베이스를 사용해야 조건에 충족할 수 있다. 그러므로 테스트가 실행되면서 데이터베이스의 상태는 변하게 되고 테스트는 데이터베이스의 상태에 따라 성공 여부가...","categories": ["spring","test","checkmate"],
        "tags": [],
        "url": "/spring/test/checkmate/%EC%9D%B8%EC%88%98%ED%85%8C%EC%8A%A4%ED%8A%B8-%EA%B2%A9%EB%A6%AC%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "서비스 계층을 테스트할 때 @Transactional 사용을 지양하자",
        "excerpt":"이 글은 개인적인 제 생각입니다. 보통 우리는 여러 repository 메서드를를 실행시키는(DB에 접근하는) Service 계층에서 원자성을 보장하기 위해 @Transactional 어노테이션을 붙여줍니다. 트랜잭션 관리는 서비스 계층의 역할 중에서 가장 중요하다고 볼 수도 있는 역할이라고 생각을 하는데요. 단순히 테스트 격리를 위해서 Service 테스트 클래스에서 @Transactional을 붙여주게 된다면 각 서비스 메서드들은 테스트 클래스의 트랜잭션에...","categories": ["spring","test","checkmate"],
        "tags": [],
        "url": "/spring/test/checkmate/Service-%ED%85%8C%EC%8A%A4%ED%8A%B8-%ED%81%B4%EB%9E%98%EC%8A%A4%EC%97%90%EC%84%9C-@Transactional%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%98%EB%A9%B4-%EC%95%88%EB%90%9C%EB%8B%A4/",
        "teaser": null
      },{
        "title": "시간에 독립적인 테스트를 위한 코드 작성하기",
        "excerpt":"지금 진행하고 있는 프로젝트인 체크메이트는 출결 관리 서비스이다. 출석이라는 도메인 자체가 시간과 밀접해있기 때문에 시간에 따라 도메인의 상태가 많이 변경된다. 예를 들어, 미팅 시작 시간 30분 전부터 미팅 시작 시간 5분 후 까지는 출석부가 수정이 허용되고, 출석 허용시간이 끝나면 출결 상태가 출석이 아닌 회원들은 지각으로 바뀌어야 하는 등 기능의 요구사항들과...","categories": ["spring","test","checkmate"],
        "tags": [],
        "url": "/spring/test/checkmate/%EC%8B%9C%EA%B0%84%EC%97%90-%EB%8F%85%EB%A6%BD%EC%A0%81%EC%9D%B8-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "Application Context를 재활용해서 테스트 시간을 줄이자",
        "excerpt":"JUnit은 테스트 메서드를 실행할 때마다 매번 테스트 클래스의 새로운 오브젝트를 만든다. 따라서 모든 테스트는 서로 영향을 주지 않으며 독립적으로 실행되는 것을 보장한다. 하지만 테스트가 독립적이라고 해서 매번 Application Context를 새로 만드는 건 매우 비효율적이다. 스프링은 이러한 문제를 해결하기 위해 Context Caching 기능을 제공한다. Spring 테스트 컨텍스트 프레임워크는 한번 ApplicationContext가 만들어지면...","categories": ["spring","test","checkmate"],
        "tags": [],
        "url": "/spring/test/checkmate/Application-Context%EB%A5%BC-%EC%9E%AC%EC%82%AC%EC%9A%A9%ED%95%B4%EC%84%9C-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%8B%9C%EA%B0%84%EC%9D%84-%EC%A4%84%EC%9D%B4%EC%9E%90/",
        "teaser": null
      }]
