const SignupRepository = require('../../src/repositories/signup.repository');

class SignupService {
  signupRepository = new SignupRepository();
  signupUser = async (username, nickname, password, selfIntro, profileImg) => {
    await this.signupRepository.signupUser(
      username,
      nickname,
      password,
      selfIntro,
      profileImg,
    );
    return true;
  };
}
module.exports = SignupService;
