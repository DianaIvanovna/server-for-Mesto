// app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const { PORT = 3000 } = process.env;
const { errors } = require('celebrate');
const { celebrate, Joi } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { RegURL } = require('./validate/RegURL');
const routerUsers = require('./routes/users.js');
const routerCards = require('./routes/cards.js');

const { createUser, login } = require('./controllers/users');
const auth = require('./middlewares/auth');

const app = express();


app.use(cookieParser());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger); // подключаем логгер запросов

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
    avatar: Joi.string().required().regex(RegURL),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), createUser);
app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), login);

app.use(auth);

app.use('/users', routerUsers);
app.use('/cards', routerCards);
app.use((req, res) => res.status(404).send({ message: 'Запрашиваемый ресурс не найден' }));

app.use(errorLogger); // подключаем логгер ошибок
app.use(errors()); // обработчик ошибок celebrate

/* eslint-disable no-unused-vars */
app.use((err, message, req, res, next) => {
  const { statusCode = 500 } = err;
  res
    .status(statusCode)
    .send({ // проверяем статус и выставляем сообщение в зависимости от него
      message: statusCode === 500
        ? 'На сервере произошла ошибка'
        : message,
    });
});

app.listen(PORT);
