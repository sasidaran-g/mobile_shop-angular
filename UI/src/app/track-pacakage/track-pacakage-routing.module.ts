import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackPacakageComponent } from './track-pacakage.component';

const routes: Routes = [{ path: '', component: TrackPacakageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackPacakageRoutingModule {}
