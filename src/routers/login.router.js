const { Router } = require('express');
const passport = require('passport');
const LoginController = require('../controllers/login.controller');
const router = Router();
const loginController = new LoginController();

router.post('/', loginController.login);
router.get('/kakao', passport.authenticate('kakao'));

module.exports = router;
