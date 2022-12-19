const logger = require('../../config/loggers');
const DiaryService = require('../../src/services/diary.service');
const { ApiError } = require('../utils/apiError');

class DiaryController {
  diaryService = new DiaryService();
  createDiary = async (req, res) => {
    try {
      const { userId } = res.locals.user;
      const { title, image, content, weather } = req.body;
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
    const { userId } = res.locals.user;
    console.log(userId)
    const diaries = await this.diaryService.findAllDiaries(userId);
    return res.status(201).json({ diaries });
  };

  findDetailDiary = async (req, res) => {
    try {
      const { diaryId } = req.params;
      const { userId } = res.locals.user;
      const diary = await this.diaryService.findDetailDiary({
        diaryId,
        userId,
      });
      return res.status(201).json({ diary });
    } catch (error) {
      res.status(error.status).json({ error: error.message });
    }
  };

  updateDiary = async (req, res) => {
    try {
      const { title, image, content, weather } = req.body;
      const { diaryId } = req.params;
      const { userId } = res.locals.user;

      await this.diaryService.updateDiary(
        userId,
        diaryId,
        title,
        image,
        content,
        weather,
      );

      return res.status(201).json({ message: '일기장 수정' });
    } catch (error) {
      res.status(error.status).json({ error: error.message });
    }
  };

  deleteDiary = async (req, res) => {
    try {
      const { diaryId } = req.params;
      const { userId } = res.locals.user;

      await this.diaryService.deleteDiary(userId, diaryId);
      return res.status(201).json({ message: '일기장 삭제' });
    } catch (error) {
      res.status(error.status).json({ error: error.message });
    }
  };
}

module.exports = DiaryController;
