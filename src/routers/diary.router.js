const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const DiaryController = require('../controllers/diary.controller');
const diarycontroller = new DiaryController();
const upload = require('../middlewares/awsS3DiaryMiddleware');

router.post(
  '/',
  authMiddleware,
  upload.single('image'),
  diarycontroller.createDiary,
);
router.get('/:diaryId', authMiddleware, diarycontroller.findDetailDiary);
router.get('/', authMiddleware, diarycontroller.findAllDiaries);
router.put('/:diaryId', authMiddleware, diarycontroller.updateDiary);
router.delete('/:diaryId', authMiddleware, diarycontroller.deleteDiary);
module.exports = router;
