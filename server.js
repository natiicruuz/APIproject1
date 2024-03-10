let express = require("express"),
app = express()
port = process.env.PORT || 3000;

mongoose = require("mongoose"),
bodyParser = require("body-parser");
    
app.listen(port);

console.log("Server started on: " + port);

