const Queries = require("../../Queries/queries");
const db = require("../../db");

exports.insertProduct = (req, res) => {
  const Data = req.body;
  db.query(
    Queries.insertProd,
    [
      Data.productid,
      Data.productname,
      Data.modalnumber,
      parseInt(Data.productprice),
      parseInt(Data.taxpercentage),
      parseInt(Data.cgst),
      parseInt(Data.sgst),
      parseInt(Data.quantity),
      parseInt(Data.totalamount),
      Data.companyid,
      Data.companyname,
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

exports.getProduct = (req, res) => {
  db.query(Queries.getProd, (err, result) => {
    if (err) {
      console.log("error", err);
      send500Error(res, "error in getting product data");
    } else {
      console.log("response in getproduct", result);
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
