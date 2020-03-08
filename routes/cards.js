const routerCards = require('express').Router();
const path = require('path');
const fs = require('fs');

const pathFileCards = path.join(__dirname, '../data/cards.json');
let cards;

// чтение данных из файла cards.json
fs.promises.readFile(pathFileCards, { encoding: 'utf8' })
  .then((data) => {
    cards = JSON.parse(data);
  })
  .catch((err) => {
    console.log(err);
  });


routerCards.get('/', (req, res) => {
  res.send(cards);
});

module.exports = routerCards;
