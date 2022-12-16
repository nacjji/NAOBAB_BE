const express = require('express');
const router = express.Router();
const signupRouter = require('./signup.router');

router.use('/signup/', signupRouter);
// const loginRouter = require('./login');

// router.use("/login", loginRouter);

module.exports = router;
