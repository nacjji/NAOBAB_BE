const { Users } = require('../../models');

class SignupRepository {
  // 회원가입 메소드
  signupUser = async (username, password, profileImg, selfIntro) => {
    const signupUserData = await Users.create({
      username,
      password,
      profileImg,
      selfIntro,
    });
    return signupUserData;
  };
  findAllUser = async (username) => {
    const findAllUsers = await Users.findAll({
      where: { username },
    });
    return findAllUsers;
  };
}

module.exports = SignupRepository;
