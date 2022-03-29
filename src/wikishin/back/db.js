const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'Anaelle31',
    database: 'wikishin',
    host: 'localhost',
    port: 5432
});

module.exports = pool;