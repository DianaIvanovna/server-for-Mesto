// controllers/cards.js
const Card = require('../models/card');
const NotFoundError = require('../errors/notFoundError');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch((err) => next(err));
};
module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => next(err));
};
module.exports.deleteCard = (req, res, next) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (card == null) {
        console.log(card);
        throw new NotFoundError('Нет карточки с таким id');
      }
      if (card.owner === req.user._id) {
        throw new NotFoundError('Вы не можете удалять чужие карточки');
      }
      return res.send({ data: card });
    })
    .catch((err) => next(err));
};

module.exports.addLike = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true })
    .then((card) => {
      if (card == null) {
        throw new NotFoundError('Нет карточки с таким id');
      } else {
        res.send({ message: 'add like' });
      }
    })
    .catch((err) => next(err));
};
module.exports.dislike = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (card == null) {
        throw new NotFoundError('Нет карточки с таким id');
      } else {
        res.send({ message: 'delete like' });
      }
    })
    .catch((err) => next(err));
};
