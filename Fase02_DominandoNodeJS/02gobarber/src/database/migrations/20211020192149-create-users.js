'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            password_hash: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            provider: {
                // para clientes e prestadores de serviços
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            },
            create_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            update_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface, _) => {
        return queryInterface.dropTable('users');
    },
};
