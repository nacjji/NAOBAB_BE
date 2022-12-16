const jwt = require("jsonwebtoken");
router.post("/login", async (req, res) => {
  try {
    const { nickname, password } = req.body;
    const user = await User.findOne({
      attributes: ["userId", "nickname", "password"],
      where: { nickname },
    });

    if (!user || password !== user.password) {
      //유저가 없거나 패스워드가 틀렸을 경우
      res.status(412).send({ message: "닉네임 또는 패스워드를 확인해주세요" });
      return;
    }
    const existUserId = user.dataValues.userId;
    const token = jwt.sign({ userId: existUserId }, SECRET_KEY, {
      expiresIn: "60m",
    });
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60); // 만료 시간을 60분으로 설정합니다.

    res.cookie("token", `Bearer ${token}`, { expires: expires });
    // res.cookie( 'token', token, {expires: expires}); // version2
    return res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .send({ message: "로그인에 실패하였습니다.관리자에게 문의해주세요" });
  }
});
