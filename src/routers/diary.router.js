const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const DiaryController = require('../controllers/diary.controller');
const { route } = require('./login.router');
const diarycontroller = new DiaryController();

router.post('/', authMiddleware, diarycontroller.createDiary);
router.get('/:diaryId', authMiddleware, diarycontroller.findDetailDiary);
router.get('/', diarycontroller.findAllDiaries);
router.put('/:diaryId', authMiddleware, diarycontroller.updateDiary);
router.delete('/:diaryId', authMiddleware, diarycontroller.deleteDiary);
module.exports = router;
