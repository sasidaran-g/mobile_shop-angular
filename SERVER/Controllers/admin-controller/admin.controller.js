const Queries = require("../../Queries/queries");
const db = require("../../db");

var invoiceArray = [];
let Invoice = {};

exports.getAdmin = (req, res) => {
  db.query(Queries.getCus, (err, result) => {
    if (err) {
      console.log("error", err);
      send500Error(res, "error in getting admin data");
    } else {
      // console.log("response in getAdmin", result);
      send200AndData(res, result);
    }
  });
};

exports.getAdminOrder = (req, res) => {
  const getId = req.params.id;
  db.query(Queries.getAdminOrder, getId, (err, result) => {
    if (err) {
      console.log("error", err);
      send500Error(res, "error in getting admin data detials");
    } else {
      // console.log("response in getadmin detials", result);
      send200AndData(res, result);
    }
  });
};

exports.insertStatus = async (req, res) => {
  const Data = req.body;
  const getId = req.params.id;

  if (Data.labelmenu == "") {
    return send500Error(res, "error in posting data");
  }

  try {
    await new Promise((resolve, reject) => {
      db.query(Queries.insertLabel, [Data.labelmenu, getId], (err, result) => {
        if (err) {
          console.log("error", err);
          reject(new Error("error in posting data"));
        } else {
          // console.log("response in status detials", result);
          resolve();
        }
      });
    });

    const adminOrderResult = await new Promise((resolve, reject) => {
      db.query(Queries.getAdminOrderForInvoice, getId, (err, result) => {
        if (err) {
          console.log("error", err);
          reject(new Error("error in admin order result!"));
        } else {
          console.log("response in admin order result", result);
          resolve(result);
        }
      });
    });
    if (adminOrderResult.length > 0) {
      Invoice = {
        orderID: adminOrderResult[0].Order_ID,
        Quantity: adminOrderResult[0].Quantity,
        Total_Amount: adminOrderResult[0].Total_Amount,
        Status: adminOrderResult[0].status,
        CustomerID: adminOrderResult[0].customer_id,
      };
    } else {
      throw new Error("No admin order found for invoice");
    }
    console.log("invoice obj---------->>>>>", Invoice);

    const adminOrderDetailsResult = await new Promise((resolve, reject) => {
      db.query(Queries.getAdminOrderDetialsForInvoice, getId, (err, result) => {
        if (err) {
          console.log("error", err);
          reject(new Error("error in admin detials result"));
        } else {
          resolve(result);
        }
      });
    });
    invoiceArray = adminOrderDetailsResult;
    const formData = req.body;
    console.log("form data-------------->", formData);
    console.log("invoice Arr", invoiceArray);

    // Insert the invoice
    const invoiceID = await insertInvoice(Invoice);
    console.log("invoice insert id", invoiceID);

    // Insert the invoice details
    await insertInvoiceDetials(invoiceID);

    if (formData.labelmenu == "processing") {
      console.log("form data processing---------->>>", formData.labelmenu);
      await processInvoice();
    } else if (formData.labelmenu == "cancelled") {
      console.log("form data cancell---------->>>", formData.labelmenu);
      await cancellInvoice();
    } else if (formData.labelmenu == "delivered") {
      console.log("form data deliver---------->>>", formData.labelmenu);
      await deliverInvoice(Invoice);
    }

    send200AndData(res, { invoiceID });
  } catch (error) {
    return send500Error(res, error.message);
  }

  function insertInvoice(Invoice) {
    console.log("invoice object=====>>>", Invoice);
    return new Promise((resolve, reject) => {
      db.query(
        Queries.insertInvoiceQuery,
        [
          Invoice.Quantity,
          Invoice.Total_Amount,
          Invoice.Status,
          Invoice.CustomerID,
          Invoice.orderID,
        ],
        (err, result) => {
          if (err) {
            console.log("err", err);
            reject(new Error("error in posting invoice"));
          } else {
            console.log("result for invoice post", result);
          }
          const invoiceID = result.insertId;
          console.log("invoice insert id", invoiceID);
          resolve(invoiceID);
        }
      );
    });
  }

  function insertInvoiceDetials(invoiceid) {
    console.log("insert invoice detials id", invoiceid);
    invoiceArray.forEach((element) => {
      return new Promise((resolve, reject) => {
        db.query(
          Queries.invoiceDetialsQuery,
          [
            element.Product_id,
            element.Product_name,
            element.Product_Price,
            element.Tax,
            element.CGST,
            element.SGST,
            element.Quantity,
            element.Total_Amount,
            invoiceid,
          ],
          (err, result) => {
            if (err) {
              console.log("error invoice detials insert==>", err);
              reject(new Error("error in invoice detials insert"));
            }
            resolve(true);
          }
        );
      });
    });
  }

  function processInvoice() {
    invoiceArray.forEach((element) => {
      return new Promise((resolve, reject) => {
        db.query(
          Queries.updateProductSql,
          [element.Quantity, element.Total_Amount, element.Product_id],
          (err, result) => {
            if (err) {
              console.log("error in process invoice", err);
              reject(new Error("error in process invoice"));
            }
            resolve(true);
          }
        );
      });
    });
  }

  function cancellInvoice() {
    invoiceArray.forEach((element) => {
      return new Promise((resolve, reject) => {
        db.query(
          Queries.cancelProductSql,
          [element.Quantity, element.Total_Amount, element.Product_id],
          (err, result) => {
            if (err) {
              console.log("error in cancell invoice", err);
              reject(new Error("error in cancell invoice"));
            }
            resolve(true);
          }
        );
      });
    });
  }

  function deliverInvoice(obj) {
    console.log("invoice object=====>>>", obj);
    return new Promise((resolve, reject) => {
      db.query(
        Queries.deliverInvoice,
        [
          obj.CustomerID,
          obj.Quantity,
          obj.Total_Amount,
          obj.Status,
          obj.orderID,
        ],
        (err, result) => {
          if (err) {
            console.log("err", err);
            reject(new Error("error in posting deliver invoice"));
          }
          resolve(true);
        }
      );
    });
  }
};

exports.getDeliver = (req, res) => {
  db.query(Queries.getDeliverData, (err, result) => {
    if (err) {
      console.log("error in get deliver", err);
      send500Error(res, "error");
    } else {
      console.log("result for get deliver", result);
      send200AndData(res, result);
    }
  });
};

exports.adminRegister = (req, res) => {
  const { name, age, gender, email, password } = req.body;
  db.query(
    Queries.registerAdminQuery,
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

exports.getAdminLogin = (req, res) => {
  const { email, password } = req.body;
  db.query(Queries.loginAdminQuery, [email, password], (err, result) => {
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

function send200AndData(res, result) {
  res.status(200).json({ status: "Success", data: result });
  return;
}

async function send500Error(res, message) {
  await res.status(500).send(message);
  return;
}
