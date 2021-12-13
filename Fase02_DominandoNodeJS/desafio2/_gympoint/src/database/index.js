import Sequelize from 'sequelize';
import User from '../app/models/User';
import Students from '../app/models/Students';
import Plan from '../app/models/Plan';

import dataBaseConfig from '../config/database';

const models = [User, Students, Plan];

class Database {
  constructor() {
    // Realizando conexão como banco
    this.init();
  }

  init() {
    this.connection = new Sequelize(dataBaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
