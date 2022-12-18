const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const router = require('./src/routers/index');
const app = express();
const helmet = require('helmet');

const logger = require('./config/loggers');
const cors = require('cors');

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

const port = process.env.PORT;
app.use(express.json());

app.use('/api', express.urlencoded({ extended: false }));
app.use('/api', router);

app.use(
  cors({
    origin: true,
    credentials: true,   // default: false
  })
);

app.listen(port, () => {
  console.log(port, ' server is opened');
});
