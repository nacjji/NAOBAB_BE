const LoginRepository = require('../repositories/login.repository');
const { Users } = require('../models');
const { ApiError } = require('../utils/apiError');
const { SECRET_KEY } = process.env;

class UserService {
  constructor(bcryptModule, jwtModule) {
    this.loginRepository = new LoginRepository(Users);
    this.bcrypt = bcryptModule;
    this.jwt = jwtModule;
  }

  login = async (username, password) => {
    try {
      const user = await this.loginRepository.getUserInfo(username); //없는 아이디인 경우 체크
      if (!user) throw new ApiError('이메일 또는 비밀번호가 틀렸습니다.', 400);

      const comparisonResult = await this.bcrypt.compare(
        password,
        user.password,
      ); //비번이 틀릴 경우 체크
      if (!comparisonResult)
        throw new ApiError('이메일 또는 비밀번호가 틀렸습니다.', 400);

      const expires = new Date();
      expires.setMinutes(expires.getMinutes() + 60); //제한시간 =  1시간 설정

      const token = this.jwt.sign({ userId: user.username }, SECRET_KEY, {
        expires,
      }); //토큰 생성

      res.header('token', `Bearer ${token}`, { expires });
      return res.status(200).json({ token });
    } catch (err) {
      console.log(err);
      res
        .status(400)
        .send({ message: '로그인에 실패하였습니다.관리자에게 문의해주세요' });
    }
  };
}
