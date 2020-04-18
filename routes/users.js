// routes/users.js
const routerUsers = require('express').Router();
const {
  getUsers, userSearch, updateProfile, updateAvatar,
} = require('../controllers/users');


routerUsers.get('/', getUsers);
routerUsers.get('/:userId', userSearch);

routerUsers.patch('/me', updateProfile);
routerUsers.patch('/me/avatar', updateAvatar);


module.exports = routerUsers;
