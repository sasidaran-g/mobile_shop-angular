const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "onlineshop",
});

db.connect((err) => {
  if (err) {
    console.log("error in database", err);
  } else {
    console.log("database(all) connected succesfully");
  }
});

module.exports = db;
