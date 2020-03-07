const routerCards = require('express').Router();
const path = require('path');
const fs = require('fs');

let cards;
fs.promises.readFile(path.join(__dirname, '../data/cards.json'), { encoding: 'utf8' })
  .then((data) => {
    cards = data.toString('utf8');
  })
  .catch((err) => {
    console.log(err);
  });

routerCards.get('/', (req, res) => {
  res.send(cards);
});

module.exports = routerCards;
