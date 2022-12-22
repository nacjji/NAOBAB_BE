# NAOBAB_BE

#나오밥(나는 오늘 밥을 먹어따)

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

<img src="https://camo.githubusercontent.com/64275ceb7fccb7a4328c84c984ae3f9c90c64c0c9a3d525cfe9abe2660d67c4e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d7953514c2d3434373941313f7374796c653d666f722d7468652d6261646765266c6f676f3d4d7953514c266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&amp;logo=MySQL&amp;logoColor=white" style="max-width: 100%;">
