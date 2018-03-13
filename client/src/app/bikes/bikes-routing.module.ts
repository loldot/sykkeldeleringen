import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapViewComponent } from './map-view/map-view.component';
import { BikeViewComponent } from './bike-view/bike-view.component';
import { AuthenticationGuard } from '../shared/auth/authentication.guard';
import { BikeReservationComponent } from './bike-reservation/bike-reservation.component';

const routes: Routes = [
  { path: '', component: BikeViewComponent, canActivate: [AuthenticationGuard] },
  { path: 'map', component: MapViewComponent },
  { path: 'reserve/:id', component: BikeReservationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikesRoutingModule { }
