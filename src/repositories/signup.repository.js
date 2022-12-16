const { Users } = require("../../models")

class SignupRepository {
  // 회원가입 메소드
  signupUser = async (nickname, password) => {
    const signupUserData = await Users.create({
      nickname,
      password,
    })
    return signupUserData
  }
  findAllUser = async (nickname) => {
    const findAllUsers = await Users.findAll({
      where: { nickname },
    })
    return findAllUsers
  }
}

module.exports = SignupRepository
