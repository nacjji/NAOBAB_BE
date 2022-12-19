const SignupRepository = require('../../src/repositories/signup.repository');
const bcrypt = require('bcryptjs');
const PASSWORD_SALT = parseInt(process.env.PASSWORD_SALT);
const {
  ValidationError,
  DuplicateError,
} = require('../../exceptions/index.exception');

class SignupService {
  signupRepository = new SignupRepository();
  signupUser = async (username, nickname, password, selfIntro) => {
    const hashedPassword = await bcrypt.hash(password, parseInt(PASSWORD_SALT));

    const isExistUser = await this.signupRepository.isExistUser(username);
    if (isExistUser) throw new DuplicateError('이미 사용중인 아이디입니다.');
    if (!username || !nickname || !password) {
      throw new ValidationError('필수 항목을 입력해주세요');
    }
    await this.signupRepository.signupUser(
      username,
      nickname,
      hashedPassword,
      selfIntro,
    );
    return true;
  };
}
module.exports = SignupService;
