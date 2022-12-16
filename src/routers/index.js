const { Router } = require("express");
const loginRouter = require("./login");

const router = Router();

router.use("/login", loginRouter);

module.exports = router;
