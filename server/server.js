//connection to server
const express = require('express');
const path = require('path');
const app = express();
const port = '3000';
const router = express.Router();
const chirpRouter = require("../routes/chirpRouter.js");
const userRouter = require("../routes/userRouter");

app.use (express.json())
app.use ("/chirps", chirpRouter);
app.use ("/users", userRouter);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views');
});
app.use(express.static(path.join(__dirname, '/views')));
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
//connection to database
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "chirper",
  password: "chirper",
  database: "chirpr"
});
connection.connect();