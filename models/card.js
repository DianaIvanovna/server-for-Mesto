const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  owner: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId, // как сделать значение по умолчанию, погугли

  }],
  createAt: { // как сделать значение по умолчанию, погугли
    type: Date,
  },
});
// В этом задании самостоятельно разберитесь, как валидировать ссылки. Это описано в документации mongoose: https://mongoosejs.com/docs/validation.html
module.export = mongoose.model('card', cardSchema);
