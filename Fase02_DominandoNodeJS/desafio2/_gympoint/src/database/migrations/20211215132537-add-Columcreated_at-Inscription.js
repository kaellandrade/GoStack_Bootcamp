'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('inscription', 'created_at', {
      type: Sequelize.DATE,
      allowNull: false,
    }),
  down: (queryInterface) =>
    queryInterface.removeColumn('inscription', 'created_at'),
};
