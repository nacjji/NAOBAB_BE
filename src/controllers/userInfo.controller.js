const UserInfoService = require('../services/userInfo.service');

class UserInfoController {
  updateUserService = new UserInfoService();
  updateUser = async (req, res, next) => {
    try {
      const { nickname, profileImg, selfIntro } = req.body;
      const { userId } = res.locals.user;
      await this.updateUserService.updateUser(
        userId,
        nickname,
        profileImg,
        selfIntro,
      );
      return res.status(201).json({ message: '회원 수정 참 잘했어요!' });
    } catch (error) {
      res.status(error.status).json({ error: error.message });
    }
  };

  userInfo = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;

      const userInfo = await this.updateUserService.userInfo(userId);
      res.status(200).json({ userInfo });
    } catch (error) {
      res.status(error.status).json({ error: error.message });
    }
  };
}
module.exports = UserInfoController;
