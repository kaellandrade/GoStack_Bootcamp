import Sequelize, { Model } from 'sequelize';
/**
 * Valores que os usuários podem receber na criação e
 * atualização no banco.
 */
class File extends Model {
    static init(sequelize) {
        // Minha conexão com o banco.
        super.init(
            {
                name: Sequelize.STRING,
                path: Sequelize.STRING,
                url: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        return `${process.env.APP_URL}/files/${this.path}`;
                    },
                },
            },
            { sequelize },
        );
        return this;
    }
}
export default File;
