// routes/cards.js
const routerCards = require('express').Router();

const {
  getCards, createCard, deleteCard, addLike, dislike,
} = require('../controllers/cards');


routerCards.get('/', getCards);
routerCards.post('/', createCard);
routerCards.delete('/:cardId', deleteCard);

routerCards.put('/:cardId/likes', addLike);
routerCards.delete('/:cardId/likes', dislike);

module.exports = routerCards;
