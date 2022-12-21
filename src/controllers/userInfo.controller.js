const UserInfoService = require('../services/userInfo.service');
const logger = require('../../config/loggers');

class UserInfoController {
  updateUserService = new UserInfoService();
  updateUser = async (req, res, next) => {
    try {
      const { nickname, selfIntro } = req.body;
      const { userId } = res.locals.user;
      if (req.file) {
        const fileName = req.file.location;
        await this.updateUserService.updateUser(
          userId,
          nickname,
          selfIntro,
          fileName,
        );
      }
      await this.updateUserService.updateUser(userId, nickname, selfIntro);
      return res.status(201).json({ message: '회원 수정 참 잘했어요!' });
    } catch (error) {
      console.log(error);
      logger.error(error.message);
      res.status(error.status).json({ error: error.message });
    }
  };

  userInfo = async (req, res, next) => {
    try {
      const { userId } = res.locals.user;

      const userInfo = await this.updateUserService.userInfo(userId);
      res.status(200).json({ userInfo });
    } catch (error) {
      logger.error(error.message);
      res.status(error.status).json({ error: error.message });
    }
  };
}
module.exports = UserInfoController;
