const express = require('express');
const router = express.Router();
const UpdateUserController = require('../controllers/userInfo.controller');
const updateUserController = new UpdateUserController();
const authMiddleware = require('../middlewares/auth');
const upload = require('../middlewares/awsS3ProfileMiddleware');

router.put(
  '/',
  authMiddleware,
  upload.single('image'),
  updateUserController.updateUser,
);
router.get('/', authMiddleware, updateUserController.userInfo);

module.exports = router;
