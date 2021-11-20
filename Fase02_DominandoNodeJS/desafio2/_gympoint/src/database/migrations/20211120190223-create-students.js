module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('students', {
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
      data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      peso: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      altura: {
        type: Sequelize.REAL,
        allowNull: false,
      },
    }),
  down: (queryInterface) => queryInterface.dropTable('students'),
};
