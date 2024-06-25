import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliverTableComponent } from './deliver-table.component';

const routes: Routes = [{ path: '', component: DeliverTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliverTableRoutingModule {}
