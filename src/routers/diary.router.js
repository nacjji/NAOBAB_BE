const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const DiaryController = require('../controllers/diary.controller');
const diarycontroller = new DiaryController();

router.post('/', authMiddleware, diarycontroller.createDiary);
router.get('/', authMiddleware, diarycontroller.findDetailDiary);
router.get('/', diarycontroller.findAllDiaries)

module.exports = router;