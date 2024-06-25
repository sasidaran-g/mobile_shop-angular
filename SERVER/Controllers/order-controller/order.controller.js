const Queries = require("../../Queries/queries");
const db = require("../../db");

exports.getCategory = (req, res) => {
  db.query(Queries.getCategory, (err, result) => {
    if (err) {
      console.log("error", err);
      send500Error(res, "error in getting category data");
    } else {
      console.log("response in getcategory", result);
      send200AndData(res, result);
    }
  });
};

exports.getCompany = (req, res) => {
  const getId = req.params.id;
  db.query(Queries.getComapny, getId, (err, result) => {
    if (err) {
      console.log("error", err);
      send500Error(res, "error in getting company data");
    } else {
      console.log("response in getcompany", result);
      send200AndData(res, result);
    }
  });
};

exports.getmyProduct = (req, res) => {
  const getId = req.params.id;
  db.query(Queries.getProduct, getId, (err, result) => {
    if (err) {
      console.log("error", err);
      send500Error(res, "error in getting product data");
    } else {
      console.log("response in getproduct", result);
      send200AndData(res, result);
    }
  });
};

exports.getSelectedProduct = (req, res) => {
  const getId = req.params.id;
  db.query(Queries.getSelectedProduct, getId, (err, result) => {
    if (err) {
      console.log("error", err);
      send500Error(res, "error in getting selected product data");
    } else {
      console.log("response in get selected product", result);
      send200AndData(res, result);
    }
  });
};

exports.insertOrder = async (req, res) => {
  const formData = req.body;
  for (const element of formData) {
    if (
      !element.customerid ||
      !element.category ||
      !element.company ||
      !element.product ||
      !element.productid ||
      !element.modalnumber ||
      !element.productprice ||
      !element.cgst ||
      !element.sgst ||
      !element.taxpercentage ||
      !element.totalamount ||
      !element.grandtotal ||
      !element.totalquantity ||
      !element.payment
    ) {
      return send500Error(res, "Error in Data");
    }
  }
  try {
    const orderId = await insertCustomerOrder(formData);
    await insertCustomerOrderDetials(orderId, formData);
    send200AndData(res, { orderId });
  } catch (error) {
    console.error("Error during insertOrder:", error);
    return send500Error(res, "Internal Server Error");
  }
};

function insertCustomerOrder(data) {
  return new Promise((resolve, reject) => {
    db.query(
      Queries.insertorder,
      [data[0].totalquantity, data[0].grandtotal, "new", data[0].customerid],
      (err, result) => {
        if (err) {
          console.log("error in insert order------------", err);
          reject(new Error("error in posting data"));
        } else {
          console.log("response for insert order", result);
        }
        resolve(result.insertId);
      }
    );
  });
}

function insertCustomerOrderDetials(orId, ordata) {
  console.log("orId==========>>>", orId);
  ordata.forEach((element) => {
    return new Promise((resolve, reject) => {
      db.query(
        Queries.insertorderdetials,
        [
          element.productid,
          element.product,
          element.productprice,
          element.taxpercentage,
          element.cgst,
          element.sgst,
          1,
          element.payment,
          element.totalamount,
          orId,
        ],
        (err, result) => {
          if (err) {
            console.error("Error inserting order details:", err);
            reject(new Error("Error inserting data"));
          }
          resolve(true);
        }
      );
    });
  });
}

exports.getOrder = (req, res) => {
  const getId = req.params.id;
  db.query(Queries.getOrder, getId, (err, result) => {
    if (err) {
      console.log("error", err);
      send500Error(res, "error in getting order data");
    } else {
      console.log("response in getorder", result);
      send200AndData(res, result);
    }
  });
};

exports.getOrderDetials = (req, res) => {
  const getId = req.params.id;
  db.query(Queries.getOrderDetials, getId, (err, result) => {
    if (err) {
      console.log("error", err);
      send500Error(res, "error in getting order data detials");
    } else {
      console.log("response in getorder detials", result);
      send200AndData(res, result);
    }
  });
};

function send200AndData(res, result) {
  res.status(200).json({ status: "Success", data: result });
  return;
}

function send500Error(res, message) {
  res.status(500).json({ status: "Error", message });
  return;
}
