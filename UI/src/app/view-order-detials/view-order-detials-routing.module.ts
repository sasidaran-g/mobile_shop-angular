import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewOrderDetialsComponent } from './view-order-detials.component';

const routes: Routes = [{ path: '', component: ViewOrderDetialsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewOrderDetialsRoutingModule {}
