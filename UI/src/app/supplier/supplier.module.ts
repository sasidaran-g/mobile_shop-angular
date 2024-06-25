import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SupplierRoutingModule } from './supplier-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class SupplierModule {}
