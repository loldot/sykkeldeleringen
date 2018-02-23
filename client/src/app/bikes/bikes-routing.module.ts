import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapViewComponent } from './map-view/map-view.component';
import { BikeViewComponent } from './bike-view/bike-view.component';
import { AuthenticationGuard } from '../shared/auth/authentication.guard';

const routes: Routes = [
  { path: '', component: BikeViewComponent, canActivate: [AuthenticationGuard] },
  { path: 'map', component: MapViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikesRoutingModule { }
