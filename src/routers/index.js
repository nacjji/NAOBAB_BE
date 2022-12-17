const express = require('express');
const router = express.Router();
const loginRouter = require('./login.route.js');
const signup = require('./signup.route.js');

router.use('/signup/', signup);
router.use('/login', loginRouter);

module.exports = router;
