
const express = require("express")
const router = express.Router()
const loginRouter = require("./login");
const signup = require("./signup.route.js")
// const diaryRouter = require("")

const authMiddleware = require("../middlewares/auth")


router.use("/signup/", signup);
router.use("/login", loginRouter);

// router.use("/diary", diaryRouter);



module.exports = router;

