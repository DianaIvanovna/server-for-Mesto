const express = require('express');

const { PORT = 3000 } = process.env;
const routerUsers = require('./routes/users.js');
const routerCards = require('./routes/cards.js');

const app = express();

app.use(express.static('./public'));
app.use('/users', routerUsers);
app.use('/cards', routerCards);
app.use((req, res) => res.status(404).send({ message: 'Запрашиваемый ресурс не найден' }));

app.listen(PORT);
