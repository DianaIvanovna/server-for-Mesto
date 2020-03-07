const routerUsers = require('express').Router();
const path = require('path');
const fs = require('fs');

let users;
fs.promises.readFile(path.join(__dirname, '../data/user.json'), { encoding: 'utf8' })
  .then((data) => {
    users = data.toString('utf8');
  })
  .catch((err) => {
    console.log(err);
  });

routerUsers.get('/', (req, res) => {
  res.send(users);
});

module.exports = routerUsers;
