const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const { PORT = 3000 } = process.env;
const routerUsers = require('./routes/users.js');
const routerCards = require('./routes/cards.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// временное решение
app.use((req, res, next) => {
  req.user = {
    _id: '5e7769e146f9554e9029cfef',
  };
  next();
});

app.use('/users', routerUsers);
app.use('/cards', routerCards);
app.use((req, res) => res.status(404).send({ message: 'Запрашиваемый ресурс не найден' }));

app.listen(PORT);
