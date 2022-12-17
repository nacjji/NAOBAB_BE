const { sequelize } = require("../../models");

class DairysRepository {
  constructor(dairyModel) {
    this.dairyModel = dairyModel;
  }

  

  //다이어리 목록 전체 조회
  findAllDairies = async () => {
    const dairies = await this.dairyModel.findAll({
      order: [["dairyId", "DESC"]],
      include: [{ model: this.dairyModel, attributes: [] }],
      attributes: ["title", "createdAt", "updatedAt"],
      group: "postId",
    });
    return dairies;
  };

  //다이어리 상세 조회
  findDetailDairy = async ({ postId }) => {
    const post = await this.postsModel.findByPk(postId);
    return post;
  };

 
}

module.exports = DairysRepository;
