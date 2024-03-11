const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password:{
      type: String,
      required: true
    },
    created_date: {
      type: Date,
      default: Date.now,
    },
  });

userSchema.methods.generateJWT = function(){

  return jwt.sign({
    _id: this._id,
    name: this.name
  }, process.env.SECRET_KEY_JWT_API)
}

    // Create user model
const User = mongoose.model('User', userSchema);

module.exports = User;