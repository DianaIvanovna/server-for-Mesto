// middlewares/auth.js
const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorizedError');

const { SECRET } = process.env;

module.exports = (req, res, next) => {
  let payload;
  const token = req.cookies.jwt;
  // верифицируем токен
  try {
    // попытаемся верифицировать токен
    payload = jwt.verify(token, SECRET);
  } catch (err) {
    // отправим ошибку, если не получилось
    const error = new UnauthorizedError('Необходима авторизация');
    next(error);
    /* return res
      .status(401)
      .send({ message: 'Необходима авторизация' }); */
  }
  req.user = payload; // записываем пейлоуд в объект запроса
  next(); // пропускаем запрос дальше
  return null;
};
