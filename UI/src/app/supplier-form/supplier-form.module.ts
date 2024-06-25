import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierFormRoutingModule } from './supplier-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SupplierFormRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class SupplierFormModule {}
