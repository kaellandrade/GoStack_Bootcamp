const bcrypt = require('bcryptjs');

module.exports = {
  up: (QueryInterface) =>
    QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'José',
          email: 'jose@gympoint.com',
          password_hash: bcrypt.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
          admin: true,
        },
        {
          name: 'Marcos',
          email: 'marcos@gympoint.com',
          password_hash: bcrypt.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
          admin: true,
        },
        {
          name: 'Micael',
          email: 'micael@gympoint.com',
          password_hash: bcrypt.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
          admin: true,
        },
        {
          name: 'Daniel',
          email: 'daniel@gympoint.com',
          password_hash: bcrypt.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
          admin: true,
        },
        {
          name: 'Paulo',
          email: 'paulo@gympoint.com',
          password_hash: bcrypt.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
          admin: true,
        },
        {
          name: 'Pedro',
          email: 'pedro@gympoint.com',
          password_hash: bcrypt.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
          admin: true,
        },
      ],
      {},
    ),

  down: () => {},
};
