const UserInfoRepository = require('../repositories/userInfo.repository');

class UpdateUserService {
  userInfoRepository = new UserInfoRepository();
  updateUser = async (userId, nickname, fileName, selfIntro) =>
    await this.userInfoRepository.updateUser(
      userId,
      nickname,
      selfIntro,
      fileName,
    );

  userInfo = async (userId) => await this.userInfoRepository.userInfo(userId);
}

module.exports = UpdateUserService;
