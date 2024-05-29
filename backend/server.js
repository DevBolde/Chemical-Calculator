// backend/server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const apiRoutes = require('./routes/api');
const pool = require('./config/db');

app.use(express.json());
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
