const mysql = require("mysql");
const express = require("express");
const router = express.Router();

//connection to database
var connection = mysql.createConnection({
  host: "localhost",
  user: "chirper",
  password: "chirper",
  database: "chirpr"
});

//query to create a user
router.post("/", (req, res) => {
   let name = req.body.name;
   let email = req.body.email;
   let password = req.body.password;
  connection.query("INSERT INTO users(name,email,password) VALUES(?, ?, ?)", [name, email, password],
    function(err, results, fields) {
      if (err) {
        return console.log(err);
      }
      res.send(results);
    });
});

//query to select all users from the database.
router.get("/", (req, res) => {
  connection.query("SELECT * FROM users", function(err, results, fields) {
    if (err) {
      connection.end();
      return console.log(err);
    }
    res.send(results);
  });
});

//query to select one user from the database.
router.get("/:id", (req, res) => {
  let query = "SELECT * FROM users WHERE id = ?";
  connection.query(query, [req.params.id], function(err, results) {
    if (err) {
      return console.log(err);
    }
    res.send(results[0]);
  });
});

//query to get all chirps from a specific user
router.get("/:id", function(req, res) {
  let query = "SELECT * FROM users WHERE id = ?";
  pool.query(query, [req.params.id], (err, results, fields) => {
    if (!err) res.send(results);
    else console.log(err);
  });
});

//query to delete a user
router.delete("/:id", function(req, res) {
  let query = "DELETE FROM users WHERE id = ?";
  connection.query(query, [req.params.id], (err, results, fields) => {
    if (!err) res.send(results);
    else console.log(err);
  });
});

//query to update a user
router.put("/:id", function(req, res) {
  let query = "INSERT INTO users WHERE id = ?(name, email, password) VALUES(?, ?, ?)";
  let data = [req.body.name, req.body.email, req.body.password];
  connection.query(query, [req.params.id], (err, results, fields) => {
    if (!err) res.send(results);
    else console.log(err);
  });
});

module.exports = router;