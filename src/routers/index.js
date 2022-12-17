const express = require('express');
const router = express.Router();
const signupRouter = require('./signup.router');
const authMiddleware = require('../middlewares/auth');
const loginRouter = require('../routers/');
// const loginRouter = require('./login');
// const diaryRouter = require("")

router.use('/signup/', signupRouter);
router.use('/login', loginRouter);

// router.use("/diary", diaryRouter);

module.exports = router;
