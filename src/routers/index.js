const express = require('express');
const router = express.Router();
const signupRouter = require('./signup.router');
const diaryRouter = require('./diary.router');
const diaryRouter = require("./diary.router");

const loginRouter = require('./login.router');

router.use('/signup/', signupRouter);
router.use('/login', loginRouter);
router.use('/diary', diaryRouter);


module.exports = router;
