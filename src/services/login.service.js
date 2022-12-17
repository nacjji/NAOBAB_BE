const LoginRepository = require('../repositories/login.repository');
const { Users } = require('../../models');
const { ApiError } = require('../utils/apiError.js');
const { SECRET_KEY } = process.env;

class LoginService {
  constructor(bcryptModule, jwtModule) {
    this.loginRepository = new LoginRepository(Users);
    this.bcrypt = bcryptModule;
    this.jwt = jwtModule;
  }

  login = async (username, password) => {
    const user = await this.loginRepository.getUserInfo(username); //없는 아이디인 경우 체크
    if (!user) throw new ApiError('이메일 또는 비밀번호가 틀렸습니다.', 400);

    const comparisonResult = await this.bcrypt.compare(password, user.password); //비번이 틀릴 경우 체크
    if (!comparisonResult)
      throw new ApiError('이메일 또는 비밀번호가 틀렸습니다.', 400);

    // const expiresIn = new Date();
    // expiresIn.setMinutes(expiresIn.getMinutes() + 60); //제한시간 =  1시간 설정

    const token = this.jwt.sign({ userId: user.userId }, SECRET_KEY, {
      expiresIn: '60m',
    }); //토큰 생성

    return token;
  };
}

module.exports = LoginService;
