const { Users } = require('../../models');

class SignupRepository {
  signupUser = async (username, nickname, hashedPassword, selfIntro) => {
    const createUser = await Users.create({
      username,
      nickname,
      password: hashedPassword,
      selfIntro,
    });
    return createUser;
  };

  isExistUser = async (username) => {
    const findUser = await Users.findOne({ where: { username } });
    return findUser;
  };
}

module.exports = SignupRepository;
