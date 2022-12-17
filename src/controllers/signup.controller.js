const SignupService = require('../../src/services/signup.service');

class SignupController {
  signupService = new SignupService();
  signupUser = async (req, res, next) => {
    try {
      const { username, nickname, password, selfIntro, profileImg } = req.body;

      await this.signupService.signupUser(
        username,
        nickname,
        password,
        selfIntro,
        profileImg,
      );
      return res.status(201).json({ message: '회원가입 참 잘했어요!' });
    } catch (error) {
      console.log(error);
      res.status(error.status).json({ error: error.message });
    }
  };
}

module.exports = SignupController;
