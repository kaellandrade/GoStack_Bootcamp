import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(connection) {
    // Método chamado automaticamente pelo sequilize
    super.init(
      {
        // Colunas da nossa base de dados.
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
      },
      { sequelize: connection },
    );
  }
}

export default User;
