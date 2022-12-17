const express = require('express');

const router = express.Router();
const auth = require('../middlewares/auth');
const DiaryController = require('../controllers/diary.controller');
const diaryController = new DiaryController();

//다이어리 생성


//다이어리 전체 목록 조회
router.get('/', diaryController.findAllDiaries);

//다이어리 상세 조회
router.get('/:diaryId', diaryController.findDetailDiary);

//다이어리 수정


//다이어리 삭제

module.exports = router;