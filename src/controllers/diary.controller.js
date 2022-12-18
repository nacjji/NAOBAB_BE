const logger = require('../../config/loggers');
const DiaryService = require('../../src/services/diary.service');
const { ApiError } = require('../utils/apiError');

class DiaryController {
  diaryService = new DiaryService();
  createDiary = async (req, res) => {
    try {
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

  updateDiary = async (req, res) => {
    try {
      const { title, image, content, weather } = req.body;
      const { diaryId } = res.params;
      const { userId } = res.locals.user;

      const diaryInfo = await this.diaryService.findAllDiaries({ diaryId });

      if (userId !== diaryInfo.userId) {
        throw new ApiError('본인의 다이어리가 아닙니다.', 400);
      }
      if (!content) {
        throw new ApiError('내용을 입력해주세요.', 400);
      }
      if (!diaryInfo) {
        throw new ApiError('없는 다이어리입니다.', 400);
      }

      await this.diaryService.updateDiary(
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
      const { diaryId } = res.params;
      const { userId } = res.locals.user;
      const diaryInfo = await this.diaryService.findAllDiaries(diaryId);

      if (userId !== diaryInfo.userId) {
        throw new ApiError('본인의 다이어리가 아닙니다.', 400);
      }
      if (!diaryInfo) {
        throw new ApiError('없는 다이어리입니다.', 400);
      }

      await this.diaryService.deleteDiary(diaryId);
      return res.status(201).json({ message: '일기장 삭제' });
    } catch (error) {
      res.status(error.status).json({ error: error.message });
    }
  };
}

module.exports = DiaryController;
