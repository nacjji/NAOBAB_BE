const DiaryService = require('../services/diary.service');

class DiaryController {
    constructor () {
        this.diaryService = new DiaryService();
    }

    //다이어리 작성



    //다이어리 전체 목록 조회
    findAllDiaries = async (req, res) => {
        try {
            const diaries = await this.diaryService.findAllDiaries();
            return res.json({ diaries });
        }   catch (err) {
            console.err(err);
            return res.status(405).json({ errorMessage: "일기장 전체 목록 조회에 실패하였습니다."});
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
            res.status(406).jon({ errorMessage: "일기장 조회에 실패하였습니다."})
        }
    }
};

module.exports = DiaryController;