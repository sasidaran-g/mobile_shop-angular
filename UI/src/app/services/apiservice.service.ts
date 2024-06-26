import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  //////////////////////////////////-----------------  URL --------------------------/////////////////////////////////
  supplierUrl = 'http://localhost:5000/supplier';
  productUrl = 'http://localhost:5000/product';
  customerUrl = 'http://localhost:5000/customer';
  orderUrl = 'http://localhost:5000/order';
  adminUrl = 'http://localhost:5000/admin';
  LoginUrl = 'http://localhost:5000/login';

  constructor(private http: HttpClient) {}

  ////////////////////////////////////////////////SUPPLIER/////////////////////////////////
  insertSupplier(data: any) {
    return this.http.post(`${this.supplierUrl}/insertSupplier`, data);
  }

  getSupplier() {
    return this.http.get(`${this.supplierUrl}/getSupplier`);
  }

  //////////////////////////////////////////////PRODUCT/////////////////////////////////////
  insertProduct(data: any) {
    return this.http.post(`${this.productUrl}/insertProduct`, data);
  }

  getProduct() {
    return this.http.get(`${this.productUrl}/getProduct`);
  }

  ////////////////////////////////////////////CUSTOMER//////////////////////////////////////
  insertCustomer(data: any) {
    return this.http.post(`${this.customerUrl}/insertCustomer`, data);
  }

  getCustomer() {
    return this.http.get(`${this.customerUrl}/getCustomer`);
  }

  ////////////////////////////////////-------ORDER---------------//////////////////////////
  getCategory() {
    return this.http.get(`${this.orderUrl}/getCategory`);
  }

  getCompany(id: any) {
    return this.http.get(`${this.orderUrl}/getCompany/${id}`);
  }

  getmyProduct(id: any) {
    return this.http.get(`${this.orderUrl}/getmyProduct/${id}`);
  }

  getSelectedProduct(id: any) {
    return this.http.get(`${this.orderUrl}/getSelectedProduct/${id}`);
  }

  insertOrder(data: any) {
    return this.http.post(`${this.orderUrl}/insertOrder`, data);
  }

  getOrder(id: any) {
    return this.http.get(`${this.orderUrl}/getOrder/${id}`);
  }

  getOrderDetials(id: any) {
    return this.http.get(`${this.orderUrl}/getOrderDetials/${id}`);
  }

  //////////////////////------------ADMIN-------------------///////////////////////////

  getAdmin() {
    return this.http.get(`${this.adminUrl}/getAdmin`);
  }

  getAdminOrder(id: any) {
    return this.http.get(`${this.adminUrl}/getAdminOrder/${id}`);
  }

  insertStatus(id: any, data: any) {
    return this.http.post(`${this.adminUrl}/insertStatus/${id}`, data);
  }

  getDeliver() {
    return this.http.get(`${this.adminUrl}/getDeliver`);
  }

  ////////////////////////////----------------LOGIN---------------////////////////////////////
  // loginCheck(email: string, password: string): Observable<any> {
    // return this.http.post(`${this.LoginUrl}/getLogin`, { email, password });
  // }
   userLogin(data:any): Observable<any> {
    const headers = data;
    return this.http.get(`${this.LoginUrl}/userLogin`, { 'headers': headers });
  }

  registerCheck(name:string,age:string,gender:string,email: string, password: string): Observable<any> {
    return this.http.post(`${this.LoginUrl}/register`, { name,age,gender, email, password });
  }

  /////////////////////////------------------ADMIN REGISTER----------------/////////////////////////////
  adminCheck(email: string, password: string): Observable<any> {
    return this.http.post(`${this.adminUrl}/getAdminLogin`, { email, password });
  }
  adminRegister(name: string,age: string,gender: string,email: string,password: string) {
    return this.http.post(`${this.adminUrl}/registerAdmin`, {name,age,gender,email,password,});
  }
}
