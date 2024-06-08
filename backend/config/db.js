// backend/config/db.js
const { Pool } = require('pg');

// Update these values with your actual database connection information
const pool = new Pool({
  user: 'your_database_user',
  host: 'localhost',
  database: 'your_database_name',
  password: 'your_database_password',
  port: 5432,  // Default PostgreSQL port
});

pool.on('connect', () => {
  console.log('Connected to the PostgreSQL database.');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;
