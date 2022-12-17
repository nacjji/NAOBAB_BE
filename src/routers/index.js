const express = require('express');
const router = express.Router();
const signupRouter = require('./signup.router');
const authMiddleware = require('../middlewares/auth');
// const diaryRouter = require("")

const loginRouter = require('./login.route');


router.use('/signup/', signupRouter);
router.use('/login', loginRouter);

// router.use("/diary", diaryRouter);

module.exports = router;