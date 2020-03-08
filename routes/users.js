const routerUsers = require('express').Router();
const path = require('path');
const fs = require('fs');

const pathFileUsers = path.join(__dirname, '../data/user.json');
let users;

// чтение данных из файла users.json
fs.promises.readFile(pathFileUsers, { encoding: 'utf8' })
  .then((data) => {
    users = JSON.parse(data);
  })
  .catch((err) => {
    console.log(err);
  });


// maddlewares
const userSearch = (req, res) => {
  const value = users.findIndex((item) => item._id === req.params.id);
  if (value === -1) {
    res.status(404);
    res.send('Нет пользователя с таким id');
    return;

  }
  res.send(users[value]);
};

routerUsers.get('/', (req, res) => {
  res.send(users);
});
routerUsers.get('/:id', userSearch);

module.exports = routerUsers;
