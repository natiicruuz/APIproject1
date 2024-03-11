const mongoose = require('mongoose')

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

    // Create user model
const User = mongoose.model('User', userSchema);

module.exports = User;