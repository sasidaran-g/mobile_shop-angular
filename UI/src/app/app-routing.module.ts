import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  ////////////////////------------LOGIN-FORM-----------------/////////////////////
  {
    path: 'login-form',
    loadChildren: () =>
      import('./login-form/login-form.module').then((m) => m.LoginFormModule),
  },
  { path: '', redirectTo: 'login-form', pathMatch: 'full' },
  {
    path: 'signup-form',
    loadChildren: () =>
      import('./signup-form/signup-form.module').then(
        (m) => m.SignupFormModule
      ),
  },
  {
    path: 'login-form/signup-form',
    redirectTo: 'signup-form',
    pathMatch: 'full',
  },
  ///////////////////////////--------------ADMIN-LOGIN--------------------////////////////////
  {
    path: 'admin-login',
    loadChildren: () =>
      import('./admin-login/admin-login.module').then(
        (m) => m.AdminLoginModule
      ),
  },
  {
    path: 'login-form/admin-login',
    redirectTo: 'admin-login',
    pathMatch: 'full',
  },
  {
    path: 'admin-register',
    loadChildren: () =>
      import('./admin-register/admin-register.module').then(
        (m) => m.AdminRegisterModule
      ),
  },
  {
    path: 'admin-login/admin-register',
    redirectTo: 'admin-register',
    pathMatch: 'full',
  },
  //////////////////-----------------FIRST PAGE---------------/////////////////////
  {
    path: 'firstpage',
    loadChildren: () =>
      import('./firstpage/firstpage.module').then((m) => m.FirstpageModule),
  },
  { path: 'login-form/firstpage', redirectTo: 'firstpage', pathMatch: 'full' },
  ///////////////////////////// SUPPLIER ////////////////////////////////
  {
    path: 'supplier',
    loadChildren: () =>
      import('./supplier/supplier.module').then((m) => m.SupplierModule),
  },
  { path: 'firstpage/supplier', redirectTo: 'supplier', pathMatch: 'full' },
  {
    path: 'supplier-form',
    loadChildren: () =>
      import('./supplier-form/supplier-form.module').then(
        (m) => m.SupplierFormModule
      ),
  },
  { path: 'firstpage/supplier-form', redirectTo: 'supplier-form' },
  {
    path: 'supplier-table',
    loadChildren: () =>
      import('./supplier-table/supplier-table.module').then(
        (m) => m.SupplierTableModule
      ),
  },
  {
    path: 'supplier/supplier-table',
    redirectTo: 'supplier-table',
    pathMatch: 'full',
  },
  /////////////////////////// PRODUCT ///////////////////////////
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
  { path: 'firstpage/product', redirectTo: 'product', pathMatch: 'full' },
  {
    path: 'product-form',
    loadChildren: () =>
      import('./product-form/product-form.module').then(
        (m) => m.ProductFormModule
      ),
  },
  { path: 'firstpage/product-form', redirectTo: 'product-form' },
  {
    path: 'product-table',
    loadChildren: () =>
      import('./product-table/product-table.module').then(
        (m) => m.ProductTableModule
      ),
  },
  {
    path: 'product/product-table',
    redirectTo: 'product-table',
    pathMatch: 'full',
  },
  ///////////////---------------------CUSTOMER----------------/////////////////////////////
  {
    path: 'customer',
    loadChildren: () =>
      import('./customer/customer.module').then((m) => m.CustomerModule),
  },
  { path: 'firstpage/customer', redirectTo: 'customer', pathMatch: 'full' },
  {
    path: 'customer-form',
    loadChildren: () =>
      import('./customer-form/customer-form.module').then(
        (m) => m.CustomerFormModule
      ),
  },
  { path: 'firstpage/customer-form', redirectTo: 'customer-form' },
  {
    path: 'customer-table',
    loadChildren: () =>
      import('./customer-table/customer-table.module').then(
        (m) => m.CustomerTableModule
      ),
  },
  {
    path: 'customer/customer-table',
    redirectTo: 'customer-table',
    pathMatch: 'full',
  },
  ////////////////////////----------------ORDER-----------------------/////////////////
  {
    path: 'order-form/:id',
    loadChildren: () =>
      import('./order-form/order-form.module').then((m) => m.OrderFormModule),
  },
  { path: 'order-form/id', redirectTo: 'order-form/id', pathMatch: 'full' },

  ////////////////////----------------VIEW ORDER-------------------//////////////////////
  {
    path: 'view-order/:id',
    loadChildren: () =>
      import('./view-order/view-order.module').then((m) => m.ViewOrderModule),
  },
  { path: 'view-order/id', redirectTo: 'view-order/id', pathMatch: 'full' },
  {
    path: 'view-order-detials/:id',
    loadChildren: () =>
      import('./view-order-detials/view-order-detials.module').then(
        (m) => m.ViewOrderDetialsModule
      ),
  },
  {
    path: 'view-order-detials/id',
    redirectTo: 'view-order-detials/id',
    pathMatch: 'full',
  },
  {
    path: 'track-pacakage/:id/:status',
    loadChildren: () =>
      import('./track-pacakage/track-pacakage.module').then(
        (m) => m.TrackPacakageModule
      ),
  },
  {
    path: 'track-pacakage/id/status',
    redirectTo: 'track-pacakage/id/status',
    pathMatch: 'full',
  },
  /////////////////////////////-----------------ADMIN----------------//////////////////////
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  { path: 'firstpage/admin', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: 'admin-table',
    loadChildren: () =>
      import('./admin-table/admin-table.module').then(
        (m) => m.AdminTableModule
      ),
  },
  { path: 'admin/admin-table', redirectTo: 'admin-table', pathMatch: 'full' },
  {
    path: 'admin-view-order/:id',
    loadChildren: () =>
      import('./admin-view-order/admin-view-order.module').then(
        (m) => m.AdminViewOrderModule
      ),
  },
  {
    path: 'admin-view-order/id',
    redirectTo: 'admin-view-order/id',
    pathMatch: 'full',
  },
  {
    path: 'deliver-table',
    loadChildren: () =>
      import('./deliver-table/deliver-table.module').then(
        (m) => m.DeliverTableModule
      ),
  },
  {
    path: 'admin/deliver-table',
    redirectTo: 'deliver-table',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
