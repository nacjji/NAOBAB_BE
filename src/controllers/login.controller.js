const LoginService = require('../services/login.service.js');
const bcrypt = require('bcryptjs');
const { loginRequestSchema } = require('../utils/auth.validation');
const jwt = require('jsonwebtoken');
const logger = require('../../config/loggers');
class LoginController {
  constructor() {
    this.loginService = new LoginService(bcrypt, jwt);
  }

  login = async (req, res, next) => {
    try {
      const { username, password } = await loginRequestSchema.validateAsync(
        req.body,
      ); // body required검증

      const accessToken = await this.loginService.login(username, password); // 토큰 받아오기
      res.header('token', `Bearer ${accessToken}`);

      res.status(200).json({ message: '로그인에 성공했습니다.', accessToken });
    } catch (err) {
      logger.error(err.message);
      next(err);
    }
  };
  kakaoLogin = async (req, res, next) => {};
}

module.exports = LoginController;
