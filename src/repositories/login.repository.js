class LoginRepository {
  constructor(LoginModel) {
    this.loginModel = LoginModel;
  }
  getUserInfo = async (username) => {
    const user = await this.loginModel.findOne({ where: { username } });
    return user;
  };
}
module.exports = LoginRepository;
