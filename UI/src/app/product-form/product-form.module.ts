import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductFormRoutingModule } from './product-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductFormRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class ProductFormModule {}
