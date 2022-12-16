const SignupRepository = require('../repositories/signup.repository');

class SignupService {
  signupRepository = new SignupRepository();
  signupUser = async (username, password, profileImg, selfIntro) => {
    // const existUser = await this.signupRepository.findAllUser(nickname)
    // 닉네임에 특수문자가 있는 경우
    // 닉네임의 길이가 6자리 미만인 경우
    // 패스워드의 길이가 6자리 미만이거나 영문+숫자+특수문자가 아닌경우

    await this.signupRepository.signupUser(nickname, password);
  };
}

module.exports = SignupService;
