const { Users } = require('../../models');
class UserInfoRepository {
  updateUser = async (userId, nickname, fileName, selfIntro) => {
    if (!fileName) {
      const updateUser = await Users.update(
        { nickname, selfIntro },
        { where: { userId } },
      );
      return updateUser;
    }
    const updateUser = await Users.update(
      { nickname, selfIntro, profileImg: fileName },
      { where: { userId } },
    );
    return updateUser;
  };

  userInfo = async (userId) => {
    const findUser = await Users.findOne({
      where: { userId },
      attributes: { exclude: ['password', 'userId'] },
    });
    return findUser;
  };
}
module.exports = UserInfoRepository;
