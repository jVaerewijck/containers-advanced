const express = require('express');

const app = express();

const port = 3000;

const firstName = 'Jarn';
const lastName = 'Vaerewijck';
const studentNbr = 's144013';

app.get('/', (req, res) => {
  res.json({
    message: `Hello world! From ${firstName} ${lastName}`, 
    firstName, 
    lastName,
    studentNbr
  });
});

app.listen(port, () => {
  console.log(`Hello world app listening on port ${port}`);
});
