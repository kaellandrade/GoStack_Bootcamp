import Sequelize, { Model } from 'sequelize';

class Students extends Model {
  static init(connection) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        data_nascimento: Sequelize.DATE,
        peso: Sequelize.REAL,
        altura: Sequelize.REAL,
      },
      { sequelize: connection },
    );
    return this;
  }
}
export default Students;
