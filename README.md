# NAOBAB_BE

# 나오밥(나는 오늘 밥을 먹어따)

- 그림일기 웹사이트


## Build Setup

    npm install
    npm init -y
    npm i nodemon
    npm i express
    npm i sequelize mysql2 -S
    npm i sequelize -D
    npm i sequelize-cli -D
    npm i cookie-parser
    npm i jsonwebtoken
    npm i dotenv
    npm i --save multer
    npm i passport passport-local passport-kakao bcrypt
    npm i prettier -D
    npm i bcryptjs
    npm i joi
    npm i helmet
    npm i winston
    npm i winston-daily-rotate-file
    npm i process
    npm i cors
    npm install aws-sdk
    npm i multer-s3@^2 --save


    npx sequelize init

    npx sequelize model:generate --name Users --attributes username:string,nickname:string,password:string,profileImg:string,self_intro:string

    npx sequelize model:generate --name Diary --attributes userId:integer,title:string,image:string,content:string
    
## 기술 스택
<img src="https://camo.githubusercontent.com/eea3c89b5aa320f391bd9ce962c4ef7d92c943a56c376c6cbac82be641585101/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d4a617661536372697074266c6f676f436f6c6f723d626c61636b" data-canonical-src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&amp;logo=JavaScript&amp;logoColor=black" style="max-width: 100%;"><img src="https://camo.githubusercontent.com/ab61fce6586c27e04d8ac35d0a77a20b78eb57de63ac2243353f23d3752b1fc3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3333393933333f7374796c653d666f722d7468652d6261646765266c6f676f3d4e6f64652e6a73266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&amp;logo=Node.js&amp;logoColor=white" style="max-width: 100%;"><img src="https://camo.githubusercontent.com/93907c63a75a4b788c8f5ab36b7064add824dd890c2de95e8a965c5460dc5268/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d45787072657373266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/Express-000000?style=for-the-badge&amp;logo=Express&amp;logoColor=white" style="max-width: 100%;">

<img src="https://camo.githubusercontent.com/64275ceb7fccb7a4328c84c984ae3f9c90c64c0c9a3d525cfe9abe2660d67c4e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d7953514c2d3434373941313f7374796c653d666f722d7468652d6261646765266c6f676f3d4d7953514c266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&amp;logo=MySQL&amp;logoColor=white" style="max-width: 100%;"><img src="https://camo.githubusercontent.com/6c50eb6f911b1bcb4c0b790fb5e908bf896c525685839fa802c41349dcd1c8bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53657175656c697a652d3532423045373f7374796c653d666f722d7468652d6261646765266c6f676f3d53657175656c697a65266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&amp;logo=Sequelize&amp;logoColor=white" style="max-width: 100%;">



## Features
signup
- username  리소스 중복 확인
- username, nickname, password  데이터 형식 검사

login
- 로그인시 JWT Access 토큰 발행
- HTTP Header로 Access 토큰 전송
- 해당하는 JWT 유효성에 대한 검증과 복호화

userInfo
- 유저정보저장
- 유저 프로필 수정
     - 유저 프로필 이미지 추가
     - 유저 닉네임, 소개글 수정

diary
- 일기장 생성
     - title, image, content 작성
     - 프론트 측에서 weather API 전달

- 일기장 목록 조회
     - 일기장 목록 조회 시 유효성 검사

- 일기장 상세 조회
    - 로그인 여부 확인
    -   

- 일기장 수정
     -  title, content, image, content 수정

 - 일기장 삭제
    - 게시글 작성자 여부 확인  


## ERD
![스크린샷 2022-12-22 오전 10 30 16](https://user-images.githubusercontent.com/105340187/209035154-133ea5d9-2e2f-4dd8-bfb7-33b0b9130982.png)


## Trouble Shooting
1. pk 설정
:질문:관계 설정이 되지 않는다.
- sequelize model 생성시에 data 타입만 지정하고 pk 설정하지 않았다.
- 명령어로 생성하는 모델에 pk 를 설정하지 않으면 해당하는 Id값만 들어간다.
2. 헤더 토큰
:질문:로그인 후에 다이어리 생성이 되지 않는다.
- 토큰이 필요한 작업에서 Thunder Client로 테스트 할 때는 , auth Bearer에 로그인 시 발행된 토큰을 직.접. 넣어야 한다.
3. 파일 업로드 : multer / formData
(이슈...가 뭐였을까요??? 왜 기억나지 않죠..ㅠ?)
4. S3 업로드한 이미지 확인
:질문:S3 에 업로드한 이미지 객체URL을 클릭하면, 이미지가 바로 다운로드된다.
-> bucket에 저장할 contentType 코드 작성 시 AUTO_CONTENT_TYPE 를 빠뜨렸다.
5. 프로필 수정
:질문:DB에 저장하면 수정한 content가 image 자리에 들어간다.
- SQL을 사용하고 있기 때문에 필드에 있는 순서대로 값을 넣어줘야 한다. (SQL 순서 문제)
6. 깃허브 pull
:질문: pull 받고 나서 코드를 실행했는데 서버가 다운된다.
-> pull 받고 나면  .env 파일부터 확인하고 사용 환경 맞게 설정해야 한다.


