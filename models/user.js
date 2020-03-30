const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String,
    // eslint-disable-next-line
    match: /((http:\/\/)|(https:\/\/))((([\da-z\.-]+)\.([a-z\.]{2,6})([=&?\/\w\.-]*)*\/?(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|\d{2,4})$)?$)|((\d{1,3}\.){3}\d{1,3}))(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|\d{2,4})$)?$/,
    required: true,
  },

});

module.exports = mongoose.model('user', userSchema);
