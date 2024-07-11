const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./config/db');
const port = 6000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// Create a customer
app.post('/customers', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newCustomer = await pool.query(
      'INSERT INTO customers (name, email, phone) VALUES($1, $2, $3) RETURNING *',
      [name, email, phone]
    );
    res.json(newCustomer.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
} );





app.get('/backendmessage', (req, res) => {
    const responseData = {
      message1: 'Hello from the backend! :D',
      message2: 'Goodbye now! <3'
    };
    res.send(responseData);
  });
  
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
