const Query = require("../../Queries/queries");
const db = require("../../db");

exports.userLogin = (req, res) => {
  var data = req.headers.emailid;
  db.query(Query.loginQuery, [data], (err, result) => {
    if (err) {
      console.log("req", req);
      console.log("data", data);
      console.log("err", err);
      send500Error(res, "error");
    } else {
      console.log("req====>>>", req);
      console.log("data===>>>", data);
      console.log("err====>>>", err);
      res.send({ message: "login Successfully!!!" });
    }
  });
};

exports.register = (req, res) => {
  const { name, age, gender, email, password } = req.body;
  db.query(
    Query.registerQuery,
    [name, age, gender, email, password],
    (err, result) => {
      if (err) {
        console.log("err", err);
        send500Error(res, "error");
      } else {
        res.send({ message: "Registered Successfully!!!" });
      }
    }
  );
};

function send500Error(res, message) {
  res.status(500).send(message);
  return;
}
