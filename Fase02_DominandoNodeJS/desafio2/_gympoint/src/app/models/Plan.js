import Sequelize, { Model } from 'sequelize';

class Plan extends Model {
  static init(connection) {
    super.init(
      {
        title: Sequelize.STRING,
        duration: Sequelize.INTEGER,
        price: Sequelize.REAL,
      },
      { sequelize: connection },
    );
    return this;
  }
}
export default Plan;
