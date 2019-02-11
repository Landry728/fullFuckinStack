const mysql = require('mysql')
const express = require('express');
const router = express.Router();

//connection to database
var connection = mysql.createConnection({
  host: "localhost",
  user: "chirper",
  password: "chirper",
  database: "chirpr"
});

//query to get all chirps
    router.get("/", (req, res) =>{
      connection.query('SELECT * FROM chirps',
      function (err, results, fields) {
            if(err){
            return console.log(err);
          }
          res.send(results);
      })
      });

  //query to delete a chirp
  router.delete('/:id', function (req, res) {
      let query = "DELETE * FROM chirps WHERE userid = ?";
      pool.query(query, [req.params.userid], (err, results, fields)=>{
          if (!err)
              res.send(results);
              else console.log(err);
      })
  });

  //query to create a chirp
  router.post('/', function (req, res) {
      let query = 'INSERT INTO chirps(userid, text, location) VALUES (?, ?, ?)';
      let data = ['${req.body.name}', '${req.body.email}', '${req.body.password}', '${req.body.id}']
      pool.query(query, data [req.params.userid], (err, results, fields)=>{
          if (!err)
              res.send(results);
              else console.log(err);
      })
  });

  module.exports = router;