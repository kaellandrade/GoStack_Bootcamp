module.exports = {
    port: '5433',
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'gobarber',
    define: {
        timestamps: true, // Armazena a data de criação e atualização de cada registro
        underscored: true, // nome_tabela ao invés de NomeTabela
        underscoredAll: true, // para colunas
    },
};
