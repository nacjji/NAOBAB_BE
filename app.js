const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const router = require('./src/routers/index');
const app = express();
const helmet = require('helmet');

const logger = require('./config/loggers');
const cors = require('cors');

// 미들웨어 통과하는 순서를 첫 번째로
app.use(
  cors({
    //TODO: FE origin 설정
    origin: '',
    credentials: true, // default: false
  }),
);

app.get('/', (req, res) => {
  logger.info('GET /');
  res.sendStatus(200);
});

app.get('/error', (req, res) => {
  logger.error('Error message');
  res.sendStatus(500);
});

// XSS 공격 방어
app.use(helmet());
app.use(helmet.xssFilter());

//CSRF

const port = process.env.PORT;
app.use(express.json());

app.use('/api', express.urlencoded({ extended: false }));
app.use('/api', router);

app.listen(port, () => {
  console.log(port, ' server is opened');
});
