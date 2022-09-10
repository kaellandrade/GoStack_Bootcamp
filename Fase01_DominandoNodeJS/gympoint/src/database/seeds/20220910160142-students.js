module.exports = {
  up: (QueryInterface) =>
    QueryInterface.bulkInsert(
      'students',
      [
        {
          name: 'pedro ramalho',
          email: 'randomEmail1662836893396@gmail.com',
          data_nascimento: '1953-05-16T03:00:00.000Z',
          altura: 1.96,
          created_at: new Date(),
          updated_at: new Date(),
          peso: 72.94,
        },
        {
          name: 'adriano matos',
          email: 'randomEmail1662836893396@gmail.com',
          data_nascimento: '1956-03-21T03:00:00.000Z',
          altura: 1.84,
          created_at: new Date(),
          updated_at: new Date(),
          peso: 14.94,
        },
        {
          name: 'adriano capeta',
          email: 'randomEmail1662836893396@gmail.com',
          data_nascimento: '1946-07-11T03:00:00.000Z',
          altura: 1.42,
          created_at: new Date(),
          updated_at: new Date(),
          peso: 13.31,
        },
        {
          name: 'pedro andrade',
          email: 'randomEmail1662836893396@gmail.com',
          data_nascimento: '1998-07-18T03:00:00.000Z',
          altura: 1.71,
          created_at: new Date(),
          updated_at: new Date(),
          peso: 58.99,
        },
        {
          name: 'micael gois',
          email: 'randomEmail1662836893396@gmail.com',
          data_nascimento: '1963-12-10T02:00:00.000Z',
          altura: 1.15,
          created_at: new Date(),
          updated_at: new Date(),
          peso: 96.86,
        },
        {
          name: 'pedro real',
          email: 'randomEmail1662836893396@gmail.com',
          data_nascimento: '2003-03-26T03:00:00.000Z',
          altura: 1.75,
          created_at: new Date(),
          updated_at: new Date(),
          peso: 11.7,
        },
        {
          name: 'adriano gois',
          email: 'randomEmail1662836893396@gmail.com',
          data_nascimento: '1980-07-14T03:00:00.000Z',
          altura: 1.92,
          created_at: new Date(),
          updated_at: new Date(),
          peso: 88.26,
        },
      ],
    ),

  down: () => {
  },
};
