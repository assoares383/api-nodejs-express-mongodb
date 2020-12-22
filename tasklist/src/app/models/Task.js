import Sequelize from "sequelize";

class Task extends Model {
  static init(sequelize) {
    super.init(
      {
        task: Sequelize.STRING,
        check: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
}

export default new Task();
