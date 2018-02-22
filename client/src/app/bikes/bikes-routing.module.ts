import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapViewComponent } from './map-view/map-view.component';
import { BikeViewComponent } from './bike-view/bike-view.component';

const routes: Routes = [
  { path: '', component: BikeViewComponent },
  { path: 'map', component: MapViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikesRoutingModule { }
