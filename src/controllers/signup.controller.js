const SignupService = require('../../src/services/signup.service');
const logger = require('../../config/loggers');
class SignupController {
  signupService = new SignupService();
  signupUser = async (req, res, next) => {
    try {
      const { username, nickname, password, selfIntro } = req.body;
      await this.signupService.signupUser(
        username,
        nickname,
        password,
        selfIntro,
      );
      return res.status(201).json({ message: '회원가입 참 잘했어요!' });
    } catch (error) {
      logger.error(error.message);
      res.status(error.status).json({ error: error.message });
    }
  };
}

module.exports = SignupController;
