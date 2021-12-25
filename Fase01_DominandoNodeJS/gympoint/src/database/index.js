import Sequelize from 'sequelize';
import User from '../app/models/User';
import Students from '../app/models/Students';
import Plan from '../app/models/Plan';
import Inscription from '../app/models/Inscription';
import Checkins from '../app/models/Checkins';
import Help from '../app/models/Help';

import dataBaseConfig from '../config/database';

const models = [User, Students, Plan, Inscription, Checkins, Help];
class Database {
  constructor() {
    // Realizando conexão como banco
    this.init();
  }

  init() {
    this.connection = new Sequelize(dataBaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }
}

export default new Database();
