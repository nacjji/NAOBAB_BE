const { Users } = require('../../models');

class UserInfoRepository {
  updateUser = async (userId, nickname, profileImg, selfIntro) => {
    if (userId !== loggedUser) {
      throw new Error('본인만 수정 가능');
    }
    const updateUser = await Users.update(
      { nickname, profileImg, selfIntro },
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
