const mongoose = require("mongoose")
const express = require("express")
require("dotenv").config();

const app = express()


//API routes
const apiUsers = require("./api/routes/userRoutes")
const apiTasks = require("./api/routes/taskRoutes")

app.use(express.json()) //#1
app.use('/api/users', apiUsers) //#2
app.use('/api/tasks', apiTasks) //#3

const port = process.env.PORT || 3000;
app.listen(port);
console.log("Server started on: " + port);

// Database connection URI
const DB_URI = 'mongodb://localhost/taskmanagerdb';

// Connect to MongoDB
mongoose.connect(DB_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB:', err);
});



