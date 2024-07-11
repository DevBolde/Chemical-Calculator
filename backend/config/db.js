const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Pool Customer DB',
  password: 'Korra8820!',
  port: 5432,
});

module.exports = pool;
