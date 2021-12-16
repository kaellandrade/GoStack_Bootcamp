'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.renameTable('inscription', 'inscriptions'),
  down: (queryInterface) =>
    queryInterface.renameTable('inscriptions', 'inscription'),
};
