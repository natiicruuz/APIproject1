import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
      type: String,
      required: "Enter your name",
    },
    email: {
      type: String,
      required: "Enter your email",
    },
    password:{
      type: String,
      required: "Enter your password",
    },
    Created_date: {
      type: Date,
      default: Date.now,
    },
  });

    // Create user model
const User = mongoose.model('USer', userSchema);

module.exports = User;