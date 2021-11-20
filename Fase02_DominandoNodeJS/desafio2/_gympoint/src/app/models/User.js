import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

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
        password: Sequelize.VIRTUAL,
      },
      { sequelize: connection },
    );
    this.addHook('beforeSave', async (user) => {
      const { password } = user;
      if (password) {
        try {
          user.password_hash = await bcryptjs.hash(password, 8);
        } catch (error) {
          return error;
        }
      }
    });
    return this;
  }

  checkPassword(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}

export default User;
