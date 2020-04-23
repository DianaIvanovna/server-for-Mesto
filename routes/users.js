// routes/users.js
const routerUsers = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers, userSearch, updateProfile, updateAvatar,
} = require('../controllers/users');
const { RegURL } = require('../validate/RegURL');


routerUsers.get('/', getUsers);
routerUsers.get('/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().alphanum().length(24),
  }),
}), userSearch);


routerUsers.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  }),
}), updateProfile);
routerUsers.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().regex(RegURL),
  }),
}), updateAvatar);


module.exports = routerUsers;
