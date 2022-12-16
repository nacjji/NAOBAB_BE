const { Users } = require('../../models');

class SignupRepository {
  signupUser = async (username, nickname, password, selfIntro, profileImg) => {
    const createUser = await Users.create({
      username,
      nickname,
      password,
      selfIntro,
      profileImg,
    });
    return createUser;
  };

  isExistUser = async (username) => {
    const findUser = await Users.findOne({ where: { username } });
    return findUser;
  };
}

module.exports = SignupRepository;
