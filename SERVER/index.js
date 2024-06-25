const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var cookieParser = require("cookie-parser");
const mysql = require("mysql");

const app = express();
const port = process.env.PORT || 5000;

const supplierRouter = require("./Routers/supplier.router");
const productRouter = require("./Routers/product.router");
const customerRouter = require("./Routers/customer.router");
const orderRouter = require("./Routers/order.router");
const adminRouter = require("./Routers/admin.router");
const loginRouter = require("./Routers/login.router");

let corsOptions = {
  origin: ["http://localhost:4200"],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use("/supplier", supplierRouter);
app.use("/product", productRouter);
app.use("/customer", customerRouter);
app.use("/order", orderRouter);
app.use("/admin", adminRouter);
app.use("/login", loginRouter);

app.listen(port, () => {
  console.log("listening port==>", port);
});
