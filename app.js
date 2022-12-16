const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const router = require('./src/routers/index');
const app = express();
const cookieParser = require('cookie-parser');


const port = process.env.PORT;
app.use(express.json());
app.use(cookieParser());

app.use('/api', router);

app.listen(port, () => {
  console.log(port, ' server is opened');

});
