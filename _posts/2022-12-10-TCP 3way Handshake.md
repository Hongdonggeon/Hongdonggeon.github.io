---
title: TCP 3 Way-Handshake & 4 Way-Handshake
categories:
  - network
date: 2022-12-09


---

TCP는 데이터를 메시지 형태로 보내기 위해 IP와 함께 사용되는 프로토콜로 신뢰적인 전송을 보장하기 위해 핸드셰이킹을 하고 데이터의 흐름제어와 혼잡제어를 수행한다.

3-Way Handshake는 TCP의 접속, 4-Way Handshake는 TCP의 접속 해제 과정이다.



**포트 상태 정보**

- CLOSED : 포트가 닫힌 상태
- LISTEN : 포트가 열린 상태로 연결 요청 대기 중
- SYN_RCV : SYNC 요청을 받고 상대방의 응답을 기다리는 중
- ESTABLISHED : 포트 연결 상태



TCP의 헤더에는 코드 비트가 존재하여 해당 위치의 비트가 1이면 패킷이 어떤 내용을 담고 있는지 알 수 있다.

![image](https://user-images.githubusercontent.com/67885363/206913153-4acde685-a851-4bee-9e2d-2373c163a546.png)

- SYN : 연결 요청
- ACK : 확인 응답
- FIN : 연결 종료



## TCP의 3-Way Handshake

TCP 통신을 이용해 데이터를 전송하기 위해 네트워크 연결을 설정하는 과정으로, 양쪽 모두 데이터를 전송할 준비가 되었다는 것을 보장한다.

![image](https://user-images.githubusercontent.com/67885363/206913422-eb5b6fbc-fd14-4fe3-ae71-fafcc8624fb1.png)

- STEP1 (Client -> Server, SYN)

클라이언트는 서버에와 커넥션을 연결하기 위해 SYN을 보낸다. (seq : x)

이 때 클라이언트의 포트 상태는 SYN_SENT로 변경된다.



- STEP2 (Server -> Client, SYN + ACK)

서버가 SYN(x)을 받고, 클라이언트로부터 요청을 받았다는 신호인 ACK과 SYN을 보낸다. (seq : y, ACK : x+1)

이 때 서버의 포트 상태는 SYN_RCV 로 변경된다.



- STEP3 (Client -> Server, ACK)

클라이언트는 서버의 ACK과 SYN 패킷을 받고 ACK을 서버로 보낸다. (ACK : y+1)

이 때 클라이언트의 포트 상태는 ESTABLISHED로 변경되고 서버도 ACK을 받게 되면 ESTABLISEHD로 변경된다.



<br/>



## TCP의 4-Way Handshake

4-Way Handshake는 연결을 해제하는 과정으로 FIN 플래그를 이용한다. 

TCP는 두 가지 연결 해제 방식이 있다.

- Graceful connection release (정상적인 연결 해제) : 정상적인 연결 해제에서는 양쪽이 커넥션이 서로 모두 커넥션을 닫을 때까지 연결되어 있다.

- Abrupt connection release (갑작스런 연결 해제) : RST(TCP reset) 세그먼트가 전송되면 갑작스러운 연결 해제가 수행되는데, RST 세그먼트는 잘못된 헤더 정보가 포함되어 있거나 연결을 지원하는 리소스가 부족할 때 등에 전송된다.



![image](https://user-images.githubusercontent.com/67885363/206914271-916a61ed-4811-40fa-8e67-a00ea768f228.png)



> Half-Close 기법
>
> 처음 보내는 종료 요청인 (1) FIN 패킷에 실질적으로 ACK가 포함되는데 이는**Half-Close 기법** 을 사용하기 때문이다.
>
> - 즉, 연결을 종료하려고 할 때 완전히 종료하지 않고 반만 종료하는 것이다.
> - Half-Close 기법을 사용하면 종료 요청자가 처음 보내는 FIN 패킷에 승인 번호를 함께 담아서 보내게 되는데, 이때 승인 번호의 의미는 **"일단 연결은 종료할건데 귀는 열어둘게. 이 승인 번호까지 처리했으니까 더 보낼 거 있으면 보내"** 가 됩니다.
> - 이후 수신자가 남은 데이터를 모두 보내고 나면 다시 요청자에게 **FIN 패킷**을 보냄으로써 모든 데이터가 처리되었다는 신호 **(3) FIN**를 보냅니다. 그럼 요청자는 그때 나머지 반을 닫으면서 좀 더 안전하게 연결을 종료할 수 있게 됩니다.







- STEP1 (Client -> Server, FIN(+ACK) )

서버와 클라이언트가 연결된 상태에서 클라이언트가 접속을 끊으려고 할 때 연결을 종료한다는 FIN을 보낸다.

이때 FIN 패킷에는 실질적으로 ACK 도 포함되어 있다.



- STEP2 (Server -> Client, ACK)

서버는 FIN을 받고 확인했다는 ACK을 클라이언트에게 보내고 통신이 끝날때까지 기다린다.

이 상태가 CLOSE_WAIT 상태가 된다.



- STEP3 (Server -> Client, FIN)

서버가 통신이 끝났으면 연결이 종료되었다고 클라이언트에게 FIN 플래그를 전송하고 승인번호를 보내줄 때까지 기다리는 LAST_ACK 상태로 들어간다.



- STEP4 (Client -> Server, ACK)

클라이언트는 확인했다는 메시지를 보낸다.

그런데 만약 Server에서 FIN을 전송하기 전에 전송한 패킷이 라우팅 지연이나 패킷 유실로 인한 재전송 등으로 인해 FIN패킷보다 늦게 도착하는 상황이 발생하는 것을 방지하기 위해 Client는 Server로부터 FIN을 수신하더라도 일정시간(디폴트 240초) 동안 세션을 남겨놓고 잉여 패킷을 기다리는 과정을 거치게 되는데 이 과정을 **TIME_WAIT** 라고 한다. 이 때 만약 타임이 초과되면 CLOSED가 된다.

Server는 ACK을 받으면 Closed 상태가 된다.



<br/>

<br/>

> 참고
>
> https://velog.io/@averycode/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-TCPUDP%EC%99%80-3-Way-Handshake4-Way-Handshake
>
> <br/>
>
> https://mindnet.tistory.com/entry/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EC%89%BD%EA%B2%8C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-22%ED%8E%B8-TCP-3-WayHandshake-4-WayHandshake
>
> <br/>
>
> 모두의 네트워크 (길벗)



