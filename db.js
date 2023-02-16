const knex = require('knex');

const pool = knex({
    client: 'pg',
    connection: {
        host: "20.71.117.163",
        user:"postgres",
        password: "dbPstgrFitGlobal",
        database: "fit_alim",
        port: 5432
    },
});

module.exports = pool;