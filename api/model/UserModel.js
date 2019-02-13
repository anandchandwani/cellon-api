const mongoose = require('mongoose');

const  UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: 'Kindly enter the name '
  },
  email: {
    type: String,
    required: 'Kindly enter the email'
  },
  password: {
    type: String,
    required: 'Kindly enter the password '
  },

   type: {
      type: String,
      enum: ['client', 'stylist'],
      default: ['client']
  }
});

const User = module.exports = mongoose.model('UserModel', UserSchema);

module.exports.addUser = (user,callback) => {
    User.create(userinfo,callback);
}
