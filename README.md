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
#F7DF1E
