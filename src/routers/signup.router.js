const express = require('express');
const SignupController = require('../controllers/signup.controller');
const router = express.Router();
const signupController = new SignupController();

router.post('/', signupController.signupUser);

module.exports = router;
