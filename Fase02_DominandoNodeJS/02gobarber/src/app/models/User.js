import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';
/**
 * Valores que os usuários podem receber na criação e
 * atualização no banco.
 */
class User extends Model {
    static init(sequelize) {
        // Minha conexão com o banco.
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password_hash: Sequelize.STRING,
                provider: Sequelize.BOOLEAN,
                // VIRTUAL Campo que não existe na base de dados, apenas qui no código.
                password: Sequelize.VIRTUAL,
            },
            { sequelize },
        );
        /**
         * Antes de salvar o suário esse código será executado.
         */
        this.addHook('beforeSave', async (user) => {
            /**
             * Gera um Hash novo Hash para o usuário.
             */
            if (user.password) {
                try {
                    user.password_hash = await bcrypt.hash(user.password, 8);
                } catch (error) {
                    console.error(error);
                }
            }
        });
        return this;
    }
    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash);
    }
}

export default User;
