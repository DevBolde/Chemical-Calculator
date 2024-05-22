const express = require('express');
const app = express();
const port = 5000;

app.get('/api', (req, res) => {
    const responseData = {
      message1: 'Hello from the backend! :D',
      message2: 'Goodbye now! <3'
    };
    res.send(responseData);
  });
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});