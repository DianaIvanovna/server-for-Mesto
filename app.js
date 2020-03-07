const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const { PORT = 3000 } = process.env;
const router = require(path.join(__dirname, '/routes/router.js'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', router);

app.get('/cards', (req, res) => {
  res.send('ну пожалуйста');
});
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT);
