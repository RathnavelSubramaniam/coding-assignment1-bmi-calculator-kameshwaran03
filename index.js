const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height) / 100; 

  const bmi = weight / (height * height);

  res.send(`Your BMI is: ${bmi.toFixed(2)}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
