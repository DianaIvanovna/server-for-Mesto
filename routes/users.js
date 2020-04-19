// routes/users.js
const routerUsers = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers, userSearch, updateProfile, updateAvatar,
} = require('../controllers/users');


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
    avatar: Joi.string().required().regex(/((http:\/\/)|(https:\/\/))((([\da-z\.-]+)\.([a-z\.]{2,6})([=&?\/\w\.-]*)*\/?(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|\d{2,4})$)?$)|((\d{1,3}\.){3}\d{1,3}))(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|\d{2,4})$)?$/),
  }),
}), updateAvatar);


module.exports = routerUsers;
