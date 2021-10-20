import Sequelize, { Model } from 'sequelize';
/**
 * Valores que os usuários podem receber na criação e
 * atualização no banco.
 */
class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password_hash: Sequelize.STRING,
                provider: Sequelize.BOOLEAN,
            },
            { sequelize},
        );
    }
}

export default User;
