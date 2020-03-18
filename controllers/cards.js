const Card = require('../models/card.js');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((data) => res.send(data))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};
module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link })
    .then((card) => res.send({ data: card }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};
module.exports.deleteCard = (req, res) => {
  Card.findAndRemove(req.params.id)
    .then((card) => res.send({ data: card }))
    .catch(() => res.status(404).send({ message: 'Нет карточки с таким id' }));
};
