import Sequelize, { Model } from 'sequelize';
import { isAfter, isBefore } from 'date-fns';

/**
 * Classe responsável por listar as inscrições.
 */
class Inscription extends Model {
  static init(connection) {
    super.init(
      {
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        price: Sequelize.REAL,
        active: {
          type: Sequelize.VIRTUAL(Sequelize.BOOLEAN, [
            'start_date',
            'end_date',
          ]),
          get() {
            return (
              isBefore(this.get('start_date'), new Date()) &&
                isAfter(this.get('end_date'), new Date())
            );
          },
        },
      },
      { sequelize: connection },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Students, {
      foreignKey: 'student_id',
      as: 'student',
    });
    this.belongsTo(models.Plan, {
      foreignKey: 'plan_id',
      as: 'plan',
    });
  }
}
export default Inscription;
