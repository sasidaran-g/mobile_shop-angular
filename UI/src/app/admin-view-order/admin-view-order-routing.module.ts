import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewOrderComponent } from './admin-view-order.component';

const routes: Routes = [{ path: '', component: AdminViewOrderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminViewOrderRoutingModule {}
