const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// установка схемы
const userModelScheme = new Schema({
  email: String,
  login: String,
  password: String,
  confirmed: Boolean,
  confirm_hash: String
});

const dialogModelScheme = new Schema({
  _id: Number,
  fromUser: mongoose.Types.ObjectId,
  toUser: mongoose.Types.ObjectId,
  dateOfCreate: Date,
  whoCreate: mongoose.Types.ObjectId,
  lastMessage: String,
  unRead: Boolean
});

const messageModelScheme = new Schema({
  dialog: mongoose.Types.ObjectId,
  from: mongoose.Types.ObjectId,
  to: mongoose.Types.ObjectId,
  text: String,
  sendDate: Date,
  status: Boolean
});

userModelScheme.pre('save', function () {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 10);
  }
});

const  UserModel = mongoose.model('User', userModelScheme);
//const UserModel = mongoose.model('User', userModelScheme);
module.exports = {
  UserModel
}