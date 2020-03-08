const express = require('express');
const path = require('path');

const { PORT = 3000 } = process.env;

const pathUsers = path.join(__dirname, '/routes/users.js');
const pathCards = path.join(__dirname, '/routes/cards.js');
const pathPublic = path.join(__dirname, 'public');
const routerUsers = require(pathUsers);
const routerCards = require(pathCards);

const app = express();


app.use('/users', routerUsers);
app.use('/cards', routerCards);
app.use(express.static(pathPublic));
app.get('/:id', (req, res) => {
  res.status(404);
  res.send('Страница не найдена');
});
app.listen(PORT);
