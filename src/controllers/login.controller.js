const LoginService = require('../services/login.service.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class LoginController {
  constructor() {
    this.loginService = new LoginService(bcrypt, jwt);
  }

  loginRequestSchema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  login = async (req, res, next) => {
    try {
      const { username, password } = await loginRequestSchema.validateAsync(
        req.body,
      ); // body required검증

      const accessToken = await this.loginService.login(username, password); // 토큰 받아오기

      res.status(200).json({ message: '로그인에 성공했습니다.', accessToken });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = LoginController;
