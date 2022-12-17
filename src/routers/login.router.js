const { Router } = require('express');
const LoginController = require('../controllers/login.controller');
const router = Router();
const loginController = new LoginController();

router.post('/', loginController.login);
router.post('/kakao', loginController.kakaoLogin);

module.exports = router;
