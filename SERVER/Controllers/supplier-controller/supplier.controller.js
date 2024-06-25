const Queries = require("../../Queries/queries");
const db = require("../../db");

exports.insertSupp = (req, res) => {
  const Data = req.body;
  db.query(
    Queries.insertsupp,
    [
      parseInt(Data.supplierid),
      Data.suppliername,
      Data.phoneno,
      Data.productname,
      parseInt(Data.pricepereach),
      parseInt(Data.quantity),
      parseInt(Data.totalamount),
    ],
    (err, result) => {
      if (err) {
        console.log("error", err);
        send500Error(res, "Error in posting data");
      } else {
        console.log("result in insert", result);
        send200AndData(res, result);
        console.log("employee success!!!");
      }
    }
  );
};

exports.getSupplier = (req, res) => {
  db.query(Queries.getSupp, (err, result) => {
    if (err) {
      console.log("error", err);
      send500Error(res, "error in getting supplier data");
    } else {
      console.log("response in getsupplier", result);
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
