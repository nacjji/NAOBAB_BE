const SignupRepository = require('../../src/repositories/signup.repository');
const bcrypt = require('bcryptjs');
const PASSWORD_SALT = parseInt(process.env.PASSWORD_SALT);

class SignupService {
  signupRepository = new SignupRepository();
  signupUser = async (username, nickname, password, selfIntro, profileImg) => {
    const hashedPassword = await bcrypt.hash(password, parseInt(PASSWORD_SALT));
    await this.signupRepository.signupUser(
      username,
      nickname,
      hashedPassword,
      selfIntro,
      profileImg,
    );
    return true;
  };
}
module.exports = SignupService;
