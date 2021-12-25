require('dotenv/config')
module.exports = {
    port: '5433',
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    define: {
        timestamps: true, // Armazena a data de criação e atualização de cada registro
        underscored: true, // nome_tabela ao invés de NomeTabela
        underscoredAll: true, // para colunas
    },
};
