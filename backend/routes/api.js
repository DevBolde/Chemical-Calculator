// backend/routes/api.js
const express = require('express');
const router = express.Router();
const pool = require('../config/db');



// Example route to fetch data from PostgreSQL
router.get('/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM your_table_name');
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error.stack);
    res.status(500).send('Error fetching data from the database');
  }
});

module.exports = router;
