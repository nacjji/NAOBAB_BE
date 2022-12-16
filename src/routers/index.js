const express = require("express")
const router = express.Router()
const loginRouter = require("./login");
const signup = require("./signup.route.js")

router.use("/signup/", signup)
router.use("/login", loginRouter);

router.use("/login", loginRouter);

module.exports = router

