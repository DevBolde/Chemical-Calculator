const express = require('express');

const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');
// const pool = require('./config/db');
const port = 6000;

const app = express();
// Middleware
app.use(cors());
app.use(express.json());

const sequelize = new Sequelize('Pool Customer DB', 'postgres', 'Korra8820!', {
  host: 'localhost',
  dialect: 'postgres',
});

const Customer = sequelize.define('customer', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

//sync the model with the database
sequelize.sync();

// Routes
// Create a customer
app.post('/api/customers', async (req, res) => {
  console.log('Received request:', req.body);
  try {
    const newCustomer = await Customer.create(req.body);
    console.log('Customer created:', newCustomer);
    res.status(201).json(newCustomer);
    console.log('Response sent successfully');
  } catch (error) {
    console.error('Error:', error);
    res.status(400).json({ message: error.message });
  }
});

app.get('/api/customers', async (req, res) => {
  try {
    const newCustomer = await Customer.findAll();
    res.status(200).json(newCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/api/customers/:id', async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) throw new Error('Customer not found');
    await customer.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});




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
