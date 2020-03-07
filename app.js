const express = require('express');
const path = require('path');

const routerUsers = require(path.join(__dirname, '/routes/users.js'));
const routerCards = require(path.join(__dirname, '/routes/cards.js'));

const app = express();
const { PORT = 3000 } = process.env;
app.use('/users', routerUsers);
app.use('/cards', routerCards);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT);
