const Query = require("../../Queries/queries");
const db = require("../../db");

exports.getLogin = (req, res) => {
  const { email, password } = req.body;
  db.query(Query.loginQuery, [email, password], (err, result) => {
    if (err) {
      console.log("err", err);
      send500Error(res, "error");
    } else {
      console.log("result-->", result);
      if (result.length > 0) {
        res.send({ message: "Login Succesfully!!!", user: result[0] });
      } else {
        res.status(401).send({ message: "Invalid Detials!" });
      }
    }
  });
};

exports.register = (req, res) => {
  const { name,age,gender, email, password } = req.body;
  db.query(Query.registerQuery, [name,age,gender,email, password], (err, result) => {
    if (err) {
      console.log("err", err);
      send500Error(res, "error");
    } else {
      res.send({ message: "Registered Successfully!!!" });
    }
  });
};

function send500Error(res, message) {
  res.status(500).send(message);
  return;
}
