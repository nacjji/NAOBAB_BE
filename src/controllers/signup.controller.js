const SignupService = require('../../src/services/signup.service');

class SignupController {
  signupService = new SignupService();
  signupUser = async (req, res, next) => {
    const { username, nickname, password, selfIntro, profileImg } = req.body;
    await this.signupService.signupUser(
      username,
      nickname,
      password,
      selfIntro,
      profileImg,
    );
    return res.status(201).json({ message: '회원가입 참 잘했어요!' });
  };
}

module.exports = SignupController;

