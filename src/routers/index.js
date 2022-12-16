const express = require('express');
const router = express.Router();

const signupRouter = require('./signup.route.js');

router.use('/signup', signupRouter);

module.exports = router;
