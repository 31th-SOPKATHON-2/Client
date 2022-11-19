<div align="center" >
<img src="https://user-images.githubusercontent.com/63237389/202855268-a872ee3c-10b2-4fda-95d5-754620a9b716.png">
<p style="font-size: 20px; font-weight: 700;" >야 너두 잼민이 될 수 있어,  잼민어 번역기 </p>
</div>

---

## <b>✨ 서비스 소개 ✨</b>

<br/>

### **1️⃣ 가치**

하루가 멀다하고 변화하는 신조어 하루가 멀다하고 변화하는 신조어의 의미와 활용방법을, 쉽고 빠르게 알 수 있습니다.

<br/>

### **2️⃣ 문제정의**

하루가 멀다하고 변화하는 신조어, 무슨뜻인지 알기 어렵고 세대간의 소통이 점점 힘들어지지 않나요?  
 여러 검색엔진을 사용하지만, 지나치게 많은 정보(ex.블로그 글, 유튜브 영상 ect.)를 마주해야 해 원하는 정보에 곧바로 접근하지 못하는 문제를 겪으시지 않으셨나요?

<br/>

### **3️⃣ 타겟정의**

저희는 이런 분들을 위한 서비스입니다.  
 신세대 용어 혹은 유행어의 의미를 이해하지 못해 검색해본 경험이 있는 사람.  
 신세대 용어 혹은 유행어를 따라하기 위해 사용 방법을 물어보거나 찾아본 적 있는 사람.

<br/>

<hr/>

## **✨ 개발자 소개 및 역할 분배 ✨**

<br/>

|                                           김형겸                                           |                                           정재욱                                           |                                                                   류성경                                                                    |
| :----------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/97586683?v=4" width="130" height="130"/> | <img src="https://avatars.githubusercontent.com/u/69576360?v=4" width="130" height="130"/> | <img src="https://avatars.githubusercontent.com/u/63237389?s=400&u=28d88f3bd3e6e34c507088bb6bdd867d2acf67eb&v=4" width="130" height="130"/> |
|                      [@Hyeongkyeom Kim](https://github.com/Brokyeom)                       |                       [@Jaewook Jeong](https://github.com/woogisea)                        |                                             [@Seonggyeong Ryu](https://github.com/Seong-Gyeong)                                             |
|                      퀴즈 시작 뷰<br/>퀴즈 결과 뷰<br/>퀴즈 정답 모달                      |                               퀴즈 목록 뷰<br/>퀴즈 목록 api                               |                                                              홈 뷰<br/>홈 api                                                               |

<br/>

<hr/>

## **✨ 협업 방식 ✨**

<br/>

### 1. Code Convention

<br/>

- ESLint, prettier 사용
- 폴더명은 소문자로 시작
- Event handler 이름 : `on`으로 시작, 복잡한 네이밍의 경우 `handle~`
- 배열과 관련된 변수명은 `__List` (ex. reservationList)
- 변수, 함수 : Camel case 사용
- container와 wrapper 구분해서 사용하기
  `container`: <b>여러 개의 요소</b>를 감싸는 div.
  `wrapper`: <b>단일 요소</b>의 레이아웃을 위한 div.
- 함수
  - 함수명은 동사로 시작
  - `const 함수명 = () => {}` 형식으로 작성
- 컴포넌트
  - 컴포넌트를 정의한 파일 : Pascal case 사용
  - `function 컴포넌트명() {}` 형식으로 작성
- styled-components
  - 코드 하단에 작성
  - px 대신 rem 사용 (ex. 10px = 1rem)
  - 항상 맨 앞에 `St` 붙여주기
  - 최상단 태그 이름은 `St[컴포넌트명]`
    ```jsx
    function Home() {
      return <StHome>...</StHome>;
    }
    ```
  - 색상은 항상 아래처럼 ThemeProvider 활용해서 설정
    ```jsx
    button {
      background-color: ${theme.colors.zemminiBlue};
      color: ${theme.colors.gray700};
    }
    ```
- API 호출 함수 : api.js에 작성하기
- 피그마에서 svg를 export해서 `src/assets/icons` 혹은 `src/assets/images`에 저장.

  <br/>

## 2. commit message

```
- init: 개발 환경 초기 세팅
- feat: 새로운 기능 추가
- design: UI를 위한 스타일링
- fix: 버그 수정
- docs: 문서 추가, 수정, 삭제
- style: 코드 포맷팅(코드 순서 변경, 세미콜론 추가)
- refactor: 코드 리팩토링
- chore: 그 외 자잘한 수정
```

<br/>

## 3. Git Branch Strategy

- **main - feature**
  - main : 배포
  - feat/[기능] : 기능별로 개발을 진행하는 브랜치
- 이슈 생성: **[브랜치명] 작업 내용 요약**
  - task 목록 작성
- 브랜치명 : **feat/페이지 지름-구현할 기능** (ex. 카페고리 페이지의 뷰 작업일 경우 _category-ui_, 홈 화면의 베스트 상품 작업일 경우 _home-bestitem_)
- 뷰 구현 : **feat/[기능]-ui**
- api 연결 : **[기능]-api**
  - task 목록 작성

<br/>

### 4. 기술 스택

```
    "axios": "^1.1.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.4.3",
    "recoil": "^0.7.6",
    "styled-components": "^5.3.6",
    "styled-reset": "^4.4.2",
```

<br/>

## 우리가 에러 뿌신 이야기

<br/>

### 형겸

### 어떤 에러를 만났나요?

---

1. `QuizIng` 컴포넌트에서 문제 스코어에 따라 `QuizEnd` 의 결과 이미지와 value 를 다르게 렌더링 해 주어야 하는 상황  
   하지만 이 둘이 형제 컴포넌트여서 `props` 를 직접 넘겨줄 수 없는 문제 발생
2. `Recoil` 사용 중 문제 스코어가 초기화되지 않아 퀴즈 결과가 올바르게 출력되지 않는 문제 발생

### 어떻게 해결했나요?

1. `Recoil` 도입, `atom` 을 사용하여 전역으로 관리할 value 를 선언해주고, `useRecoilState` 통해 상태관리,  
   `useRecoilValue`를 이용해 `RecoilState` 의 값에 따른 결과화면을 출력하도록 함수를 작성하여 해결.
2. `Recoil` 의 `useResetRecoilState` 훅을 이용하여 `atom` 의 `default` 값을 초기화 해 줄 수 있었음.

---

<br/>

### 재욱

### 어떤 에러를 만났나요?

---

1. `QuizIng` 컴포넌트에서 문제를 맞추었을 때 해당 컴포넌트에서 맞춘 것에 대한 맞춤과 틀림에 대한 표시를 어떻게 해결 할 것인가
2. 배포서버는 `http` 이고 웹서버는 `https` 인 상황에서 https에서는 http에 대한 API 호출이 불가능한 상황

### 어떻게 해결했나요?

---

1. `score` 를 저장하는 빈 배열을 만들고 정답과 실패에 대한 경우를 나눠 해당 경우에 따른 svg파일을 넣어주는 방식으로 map을 통해 컴포넌트에 출력해줬음
2. `<meta *http-equiv*="Content-Security-Policy" *content*="upgrade-insecure-requests">` 메타태그를 활용해서 https 환경에서 http로 요청을 보낼 수 있다는 아티클을 본 후 적용해 봤지만 여전히 요청이 거부됨. 서버 쪽에서 https로 서버를 구축하는 방식으로 해결예정

<br/>

### 성경

### 어떤 에러를 만났나요?

---

### 어떻게 해결했나요?

---
