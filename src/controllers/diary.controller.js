const logger = require('../../config/loggers');
const DiaryService = require('../../src/services/diary.service');
const { ApiError } = require('../utils/apiError');
const multer = require('multer');
const upload = multer;

class DiaryController {
  diaryService = new DiaryService();
  createDiary = async (req, res) => {
    try {
      const { userId } = res.locals.user;
      const { title, content, weather } = req.body;
      const fileName = req.file.location;
      console.log(fileName);
      await this.diaryService.createDiary(
        userId,
        title,
        fileName,
        content,
        weather,
      );
      return res.status(201).json({ message: '생성완료' });
    } catch (error) {
      logger.error(error.message);

      res.status(error.status).json({ error: error.message });
    }
  };

  findAllDiaries = async (req, res) => {
    try {
      const { userId } = res.locals.user;
      const diaries = await this.diaryService.findAllDiaries(userId);
      return res.status(200).json({ diaries });
    } catch (error) {
      logger.error(error.message);

      res.status(error.status).json({ error: error.message });
    }
  };

  findDetailDiary = async (req, res) => {
    try {
      const { diaryId } = req.params;
      const { userId } = res.locals.user;
      const diary = await this.diaryService.findDetailDiary({
        diaryId,
        userId,
      });
      return res.status(200).json({ diary });
    } catch (error) {
      logger.error(error.message);

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
      logger.error(err.message);

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
      logger.error(err.message);

      res.status(error.status).json({ error: error.message });
    }
  };
}

module.exports = DiaryController;
