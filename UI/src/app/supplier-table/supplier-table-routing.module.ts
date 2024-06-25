import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierTableComponent } from './supplier-table.component';

const routes: Routes = [{ path: '', component: SupplierTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplierTableRoutingModule {}
