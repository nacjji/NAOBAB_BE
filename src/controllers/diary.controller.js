const logger = require('../../config/loggers');
const DiaryService = require('../../src/services/diary.service');

class DiaryController {
  diaryService = new DiaryService();
  createDiary = async (req, res) => {
    try {
      const { title, image, content, weather } = req.body;
      const { userId } = res.locals.user;
      await this.diaryService.createDiary(
        userId,
        title,
        image,
        content,
        weather,
      );
      return res.status(201).json({ message: '일기장 생성' });
    } catch (error) {
      res.status(error.status).json({ error: error.message });
    }
  };

  findAllDiaries = async (req, res) => {
    const diaries = await this.diaryService.findAllDiaries();
    return res.status(201).json({ diaries });
  };

  findDetailDiary = async (req, res) => {
    try {
      const { diaryId } = req.params;
      const diary = await this.diaryService.findDetailDiary({ diaryId });
      return res.status(201).json({ diary });
    } catch (error) {
      res.status(error.status).json({ error: error.message });
    }
  };
}

module.exports = DiaryController;
