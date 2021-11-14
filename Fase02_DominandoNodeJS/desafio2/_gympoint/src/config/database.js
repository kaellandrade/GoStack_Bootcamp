module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gympoint',
  port: '5433',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
