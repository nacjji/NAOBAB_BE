const UserInfoRepository = require('../repositories/userInfo.repository');

class UpdateUserService {
  userInfoRepository = new UserInfoRepository();
  updateUser = async (userId, nickname, profileImg, selfIntro) =>
    await this.userInfoRepository.updateUser(
      userId,
      nickname,
      profileImg,
      selfIntro,
    );

  userInfo = async (userId) => await this.userInfoRepository.userInfo(userId);
}

module.exports = UpdateUserService;
