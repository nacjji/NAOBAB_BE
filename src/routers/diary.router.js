const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const DiaryController = require('../controllers/diary.controller');
const diarycontroller = new DiaryController();

router.post('/', authMiddleware, diarycontroller.createDiary);

module.exports = router;
