///////////////////////////////////-----------SUPPLIER---------------////////////////////////////////
exports.insertsupp =
  "INSERT INTO `supplier`(`supplier_ID`, `supplier_Name`, `phone_no`, `Product_Name`, `Price_per_each`, `Quantity`, `Total_Amount`) VALUES (?,?,?,?,?,?,?)";
exports.getSupp = "SELECT * FROM `supplier`";

/////////////////////////////////////----------PRODUCT-------------///////////////////////////
exports.insertProd =
  "INSERT INTO `product`(`Product_ID`, `Product_Name`, `Modal_Number`, `Product_Price`, `Tax`, `CGST`, `SGST`, `Quantity`, `Total_Amount`, `company_id`, `company_name`) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
exports.getProd = "SELECT * FROM product";

//////////////////////////////////-----------CUSTOMER-------------////////////////////////////
exports.insertCus =
  "INSERT INTO `customer`(`ID`, `Name`, `Age`, `Gender`, `Designation`, `Aadhar_number`, `phone_no`) VALUES (?,?,?,?,?,?,?)";
exports.getCus = "SELECT * FROM customer";

////////////////////////////////--------------ORDER---------------///////////////////////////
exports.getCategory = "SELECT * FROM `category`";
exports.getComapny = "SELECT * FROM company_name WHERE category_name= ?";
exports.getProduct =
  "SELECT * FROM product WHERE company_name= ? AND Quantity > 0";
exports.getSelectedProduct = "SELECT * FROM product WHERE 	Product_Name= ?";
exports.insertorder =
  "INSERT INTO `customer_order`(`Quantity`, `Total_Amount`, `status`, `customer_id`) VALUES (?,?,?,?)";
exports.insertorderdetials =
  "INSERT INTO `customer_order_detials`(`Product_id`, `Product_name`, `Product_Price`, `Tax`, `CGST`, `SGST`, `Quantity`,`Payment`, `Total_Amount`, `order_id`) VALUES (?,?,?,?,?,?,?,?,?,?)";
exports.getOrder = "SELECT * FROM `customer_order` WHERE customer_id= ?";
exports.getOrderDetials =
  "SELECT * FROM `customer_order_detials` WHERE order_id= ?";

/////////////////////////----------------ADMIN-----------------------////////////////////////////
exports.getAdminOrder = "SELECT * FROM customer_order WHERE customer_id= ?";
exports.insertLabel = "UPDATE customer_order set status =? WHERE Order_ID = ?";
exports.getAdminOrderForInvoice =
  "SELECT * FROM customer_order WHERE Order_ID= ?";
exports.getAdminOrderDetialsForInvoice =
  "SELECT * FROM `customer_order_detials` WHERE order_id= ?";
exports.insertInvoiceQuery =
  "INSERT INTO invoice (Quantity,Total_Amount,status,customer_id,order_id) VALUES (?,?,?,?,?)";
exports.invoiceDetialsQuery =
  "INSERT INTO invoice_item_detials (Product_id, Product_name, Product_Price,Tax, CGST, SGST, Quantity, Total_Amount, invoice_id) VALUES (?,?,?,?,?,?,?,?,?)";
exports.updateProductSql =
  "UPDATE product SET Quantity= Quantity - ?, Total_Amount= Total_Amount - ? WHERE Product_ID= ?";
exports.cancelProductSql =
  "UPDATE product SET Quantity= Quantity + ?, Total_Amount= Total_Amount + ? WHERE Product_ID= ?";
exports.updateInvoice = "UPDATE invoice SET status = ? WHERE customer_id= ?";
exports.deliverInvoice =
  "insert into deliver_invoice (customer_id,quantity,Total_Amount,status,order_id ) VALUES (?,?,?,?,?)";
exports.getDeliverData = "SELECT * FROM `deliver_invoice`";
/////////////////////////////--------------------LOGIN-------------------///////////////////////////
exports.loginQuery = "SELECT * FROM users WHERE email= ?";
exports.registerQuery = "INSERT INTO users (name,age,gender,email,password) VALUES (?,?,?,?,?)";
/////////////////////////////--------------------ADMIN REGISTER-----------///////////////////////////
exports.loginAdminQuery = "SELECT * FROM admin WHERE email= ? AND password= ?";
exports.registerAdminQuery =
  "INSERT INTO admin (name,age,gender,email,password) VALUES (?,?,?,?,?)";
