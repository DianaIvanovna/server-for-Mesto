const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};
module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  console.log(req.body);
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (card == null) {
        res.send({ message: 'Нет карточки с таким id' });
      } else if (card.owner === req.user._id) {
        return Promise.reject(new Error('Вы не можете удалять чужие карточки'));
      } else {
        res.send({ data: card });
      }
      return null;
    })
    .catch(() => res.status(404).send({ message: 'Нет карточки с таким id' }));
};

module.exports.addLike = (req, res) => {
  Card.findByIdAndUpdate(req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true })
    .then((card) => {
      if (card == null) {
        res.send({ message: 'Нет карточки с таким id' });
      } else {
        res.send({ message: 'add like' });
      }
    })
    .catch(() => { res.status(404).send({ message: 'Запрашиваемый ресурс не найден' }); });
};
module.exports.dislike = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (card == null) {
        res.send({ message: 'Нет карточки с таким id' });
      } else {
        res.send({ message: 'delete like' });
      }
    })
    .catch(() => { res.status(404).send({ message: 'Запрашиваемый ресурс не найден' }); });
};
