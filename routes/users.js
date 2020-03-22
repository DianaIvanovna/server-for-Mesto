const routerUsers = require('express').Router();
const {
  getUsers, userSearch, createUser, updateProfile, updateAvatar,
} = require('../controllers/users');

routerUsers.get('/', getUsers);
routerUsers.get('/:userId', userSearch);
routerUsers.post('/', createUser);

routerUsers.patch('/me', updateProfile);
routerUsers.patch('/me/avatar', updateAvatar);

module.exports = routerUsers;
