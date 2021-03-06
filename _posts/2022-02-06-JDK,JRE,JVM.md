---
title: JDK, JRE, JVM
toc: true
toc_sticky: true
categories:
  - java
date: 2022-02-06
---

![jdk](https://user-images.githubusercontent.com/67885363/152673863-89540ec5-c5b8-4ade-9f61-d1bf528175cd.jpeg)

![JVM_JRE_JDK](https://user-images.githubusercontent.com/67885363/152673876-68b6211c-8f99-4255-aa5c-e6a17f9dbb31.png)

# JDK (Java Development Kit)

JDK란 Java를 활용하여 프로그램을 개발할 때 필요한 도구 모음이다. <br/>JRE는 Java 프로그램을 실행하기 위한 도구들의 구성요소로 독립적으로 사용 가능하다. <br/>하지만 프로그램을 실행시키는 것도 개발의 일환이기 때문에 JDK는 JRE를 필요로 한다.

<br/> 

 **JDK 구성요소**

- javac : 자바 컴파일러. 자바 소스파일을 바이트코드로 반환
- jdb : 자바 디버깅 툴
- jar : 서로 관련있는 클래스 라이브러리들과 리소스를 하나의 파일로 묶어주는 툴

<br/>  

**JDK 종류**

- Java SE (Java Standard Edition)<br/>: 표준 에디션의 자바 플랫폼이다. 자바 언어의 핵심 기능을 제공한다. 주요 패키지는 java.lang , java.io , java.util, java.awt 등이 있다.

- Java EE (Java Enterprise Edition)<br/>: Java SE에 웹 어플리케이션 서버에서 동작하는 기능을 추가한 플랫폼이다.  JSP, Servlet, JDBC 등 기업용 어플리케이션을 개발하는데 필요한 다양한 것들이 포함된 플랫폼이다.

- Java ME (Java Micro Edition)<br/>: 임베디드 기기들에서 구동되기 위한 환경을 제공하는 API를 모아둔 플랫폼이다. 휴대전화, PDA 등에서 Java 프로그래밍 언어를 지원하기 위해 만든 플랫폼 중 하나이다.

  <br/> 

# JRE (Java Runtime Environment)

JVM 위에서 .class 파일이 원활하게 작동하기 위해서는 몇 가지 필수적인 요소들이 필요하는데 이를 제공해주는 것이 JRE다.<br/> JRE는 크게 JVM과 Java Class Libraries, Class Loader라는 요소로 구성이 된다. 

<br/> 

**Java Class Libraries**

Java를 실행시키는데 필수적인 라이브러리다.<br/>java.io, java.util, java.thread, java.lang 등 작동에 필수적인 요소들을 가지고 있다.<br/>JVM에 올라가는 바이트 코드에서도 필수 라이브러리를 참고하고 있기 때문에 간단한 코드라도 필수 라이브러리가 필요하다. 

<br/> 

**Class Loader**

필요한 클래스들을 JVM 위로 올려주는 역할을 한다. <br/>Javac를 통해 생성된 .class 파일은 각 디렉토리에 흩어져 있다.<br/>그리고 라이브러리의 클래스 파일들은 $JAVAHOME_ 내부 경로에 존재한다.<br/>이러한 각각의 클래스 파일들을 찾아서 JVM의 메모리에 탑재해주는 역할을 하는 것이 ClassLoader 이다.

ClassLoader 는 크게 Loading, Linking, 그리고 Initialization 3가지 역할을 맡게 된다.<br/> Loading 은 클래스 파일을 탑재하는 과정, Linking 은 클래스 파일을 사용하기 위해 검증하고, 기본 값으로 초기화하는 과정이다. Initialization 은 static field 의 값들을 개발자가 정의한 값으로 초기화를 하는 과정이다.

<br/> 

# JVM (Java Virtual Machine)

JVM은 Java로 작성된 프로그램이 돌아가도록 만들어준다.<br/>Java로 작성된 프로그램은 운영체제에 맞는 실행파일로 컴파일되는 것이 아닌 .class라는 확장자를 가진 파일로 변환이 되는데 이 .class 파일이 JVM위에서 작동하는 것이고 JVM이 .class 파일에 환경을 제공해준다.<br/>JVM은 자바 인터프리터, JIT 커파일러, 가비지 컬렉터로 구성되어 있다.

<br/> 

**Java Interpreter**

자바 컴파일러에 의해 변환된 자바 바이트 코드를 읽고 해석하는 역할을 하는 것이 자바 인터프리터다.

<br/> 

**JIT 컴파일러 (Just In Time compiler)**

JIT 컴파일러란 런타임에 자바 바이트 코드를 실제 기계어로 변환해주는 컴파일러를 의미한다. 프로그램의 실행 속도를 향상시키기 위해 동적 번역이라는 기법을 사용한다. 

<br/> 

**Garbage Collector**

jvm은 가비지 컬렉터를 이용해 더는 사용하지 않는 메모리를 자동으로 회수해 준다. 

<br/> 

### 정리

![img_java_programming](https://user-images.githubusercontent.com/67885363/152675147-e4b7c544-68cf-40bf-813c-e4cabcbf8a9c.png)

우리가 작성하는 자바 클래스 파일(.java)은 JDK의 자바 컴파일러(javac) 를 통해 자바 바이트 코드(.class) 로 변환하게 된다. 

자바 컴파일러에 의해 생성된 자바 바이트 코드는 운영체제에 상관없이 JVM 위에서 작동이 되기 때문에 Java가 이식성이 좋은 것이다.

그리고 바이트 코드가 JVM 위에서 원활하게 작동이 되기 위해서는 필수적인 자바 라이브러리나 우리가 작성한 클래스 파일들이 필요하는데, 이러한 각각의 클래스 파일들을 JVM 위에 올려주는 역할을 하는 것이 JRE이다.

<br/> 

참고

https://www.codejava.net/java-core/what-are-jvm-jre-and-jdk<br/>
https://tecoble.techcourse.co.kr/post/2021-07-15-jvm-classloader/<br/>
https://tecoble.techcourse.co.kr/post/2021-07-12-jvm-jre-jdk/<br/>
http://www.tcpschool.com/java/java_intro_programming