const mongoose = require('mongoose');

// Database connection URI
const DB_URI = 'mongodb://localhost:27017/taskmanagerdb';

// Connect to MongoDB
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
});

module.exports = mongoose.connection;