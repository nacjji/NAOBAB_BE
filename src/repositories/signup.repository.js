const { Users } = require('../../models');

class SignupRepository {
  signupUser = async (
    username,
    nickname,
    hashedPassword,
    selfIntro,
    profileImg,
  ) => {
    const createUser = await Users.create({
      username,
      nickname,
      password: hashedPassword,
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
