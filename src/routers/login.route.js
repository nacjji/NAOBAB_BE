const { Router } = require('express');
const LoginController = require('../controllers/login.controller');
const authMiddleware = require('../middlewares/auth');

const router = Router();

const loginController = new LoginController();

router.post('/', authMiddleware, loginController);

module.exports = router;
