const express = require('express');
const router = express.Router();
const UpdateUserController = require('../controllers/userInfo.controller');
const updateUserController = new UpdateUserController();
const authMiddleware = require('../middlewares/auth');
const upload = require('../middlewares/multerMiddlewareProfile');

router.put(
  '/',
  upload.single('image'),
  authMiddleware,
  updateUserController.updateUser,
);
router.put('/', authMiddleware, updateUserController.updateUser);
router.get('/', authMiddleware, updateUserController.userInfo);

module.exports = router;
