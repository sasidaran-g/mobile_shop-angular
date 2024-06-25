import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SupplierTableComponent } from './supplier-table/supplier-table.component';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ViewOrderDetialsComponent } from './view-order-detials/view-order-detials.component';
import { AdminComponent } from './admin/admin.component';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { AdminViewOrderComponent } from './admin-view-order/admin-view-order.component';
import { DeliverTableComponent } from './deliver-table/deliver-table.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { TrackPacakageComponent } from './track-pacakage/track-pacakage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    SupplierComponent,
    SupplierFormComponent,
    SupplierTableComponent,
    ProductComponent,
    ProductFormComponent,
    ProductTableComponent,
    CustomerComponent,
    CustomerFormComponent,
    CustomerTableComponent,
    OrderFormComponent,
    ViewOrderComponent,
    ViewOrderDetialsComponent,
    AdminComponent,
    AdminTableComponent,
    AdminViewOrderComponent,
    DeliverTableComponent,
    LoginFormComponent,
    SignupFormComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    TrackPacakageComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
