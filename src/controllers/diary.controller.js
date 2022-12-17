
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

 //다이어리 전체 목록 조회
 findAllDiaries = async (req, res) => {
    try {
        const diaries = await this.diaryService.findAllDiaries();
        return res.json({ diaries });
    }   catch (err) {
        console.err(err);
        return res.status(405).json({ errorMessage: "일기장 전체 목록 조회 실패"});
    }
}; 

//다이어리 상세 조회
findDetailDiary = async (req, res) => {
    try {
        const { diaryId } = req.params;
        const diary = await this.diaryService.findDetailDiary({ diaryId });
        res.json({ diary });
    }   catch (err) {
        console.error(err);
        res.status(406).jon({ errorMessage: "일기장 조회 실패"})
    }
}
}module.exports = DiaryController;