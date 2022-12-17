const DiaryService = require('../../src/services/diary.service');

class DiaryController {
  diaryService = new DiaryService();
  createDiary = async (req, res, next) => {
    const { title, image, content, weather } = req.body;
    const { userId } = res.locals.user;
    console.log(userId);
    await this.diaryService.createDiary(userId, title, image, content, weather);
    return res.status(201).json({ message: '일기장 생성' });
  };
}

module.exports = DiaryController;
