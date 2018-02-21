import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikeListComponent } from './bike-list/bike-list.component';

const routes: Routes = [
  { path: '', component: BikeListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikesRoutingModule { }
