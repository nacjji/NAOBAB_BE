const { Users } = require('../../models');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;
const { AuthorizationError } = require('../../exceptions/index.exception');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  console.log('여기에요', req.headers);
  const [tokenType, tokenValue] = authorization.split(' ');

  if (!authorization) {
    // res.status(401).send({
    //   errorMessage: '로그인 후 이용 가능한 기능입니다1.',
    // });
    throw err;
  }

  // 해당하는 jwt 가 유효한가에 대한 검증과 복호화

  try {
    const { userId } = jwt.verify(tokenValue, SECRET_KEY);
    Users.findByPk(userId).then((user) => {
      res.locals.user = user;
      next();
    });
  } catch (err) {
    // res.status(401).send({
    //   errorMessage: '로그인 후 이용 가능한 기능입니다2.',
    // });
    throw new AuthorizationError('로그인 후 이용 가능한 기능입니다.');
  }
};

//로그인 토큰을 전달한 채로 로그인 API 또는 회원가입 API를 호출한 경우 "이미 로그인이 되어있습니다."라는 에러 메세지를 response에 포함하기
