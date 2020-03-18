const routerUsers = require('express').Router();
const { getUsers, userSearch, createUser } = require('../controllers/users');

routerUsers.get('/', getUsers);
routerUsers.get('/:userId', userSearch);
routerUsers.post('/', createUser);

module.exports = routerUsers;
