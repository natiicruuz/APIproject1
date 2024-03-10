import mongoose from 'mongoose';
const { Schema } = mongoose;

const task = new Schema({
    taskName: {
        type: String,
        required: "Enter your name",
    },
    description: {
        type: String,
        required: "Enter your email",
    },
    priority:{ 
        type: Number,
        min: 1, 
        max: 3, 
        default: 2 
    },
    Created_date: {
      type: Date,
      default: Date.now,
    },
  });

  // Create task model
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;