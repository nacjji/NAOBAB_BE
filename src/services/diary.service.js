const DiaryRepository = require('../../src/repositories/diary.repository');

class DairyService {
    constructor() {
        this.diaryRepository = new DiaryRepository();
    }

    //다이어리 목록 전체 조회
    findAllDiaries = async () => {
        const dairies = await this.DiaryRepository.findAllDiaries();
        return dairies;
    };

    //다이어리 상세 조회
    findDetailDiary = async ({ diaryId }) => {
        const diary = await this.DiaryRepository.findDetailDiary({ diaryId });
        return diary;
    };

}

module.exports = DairyService;
