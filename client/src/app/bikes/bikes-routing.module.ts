import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikeListComponent } from './bike-list/bike-list.component';
import { MapViewComponent } from './map-view/map-view.component';

const routes: Routes = [
  { path: '', component: BikeListComponent },
  { path: 'map', component: MapViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikesRoutingModule { }
