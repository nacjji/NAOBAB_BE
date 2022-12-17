const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const router = require('./src/routers/index');
const app = express();
const helmet = require('helmet');

// XSS 공격 방어
app.use(helmet());
app.use(helmet.xssFilter());

const port = process.env.PORT;
app.use(express.json());

app.use('/api', express.urlencoded({ extended: false }));
app.use('/api', router);

app.listen(port, () => {
  console.log(port, ' server is opened');
});
