const jwt = require('jsonwebtoken');

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
    return res
      .status(401)
      .send({ message: 'Необходима авторизация' });
  }
  req.user = payload; // записываем пейлоуд в объект запроса
  next(); // пропускаем запрос дальше
  return null;
};
