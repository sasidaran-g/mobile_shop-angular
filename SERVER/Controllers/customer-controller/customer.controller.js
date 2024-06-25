const Queries = require("../../Queries/queries");
const db = require("../../db");

exports.insertCustomer = (req, res) => {
  const Data = req.body;
  db.query(
    Queries.insertCus,
    [
      Data.customerid,
      Data.customername,
      parseInt(Data.age),
      Data.gender,
      Data.designation,
      Data.aadharnumber,
      Data.mobileno,
    ],
    (err, result) => {
      if (err) {
        console.log("error", err);
        send500Error(res, "Error in posting data");
      } else {
        console.log("result in insert", result);
        send200AndData(res, result);
        console.log("customer success!!!");
      }
    }
  );
};

exports.getCustomer = (req, res) => {
  db.query(Queries.getCus, (err, result) => {
    if (err) {
      console.log("error", err);
      send500Error(res, "error in getting customer data");
    } else {
      console.log("response in getcustomer", result);
      send200AndData(res, result);
    }
  });
};

function send200AndData(res, result) {
  res.status(200).json({ status: "Success", data: result });
  return;
}

async function send500Error(res, message) {
  await res.status(500).send(message);
  return;
}
