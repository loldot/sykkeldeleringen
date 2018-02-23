import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BikesRoutingModule } from './bikes-routing.module';
import { BikeListComponent } from './bike-list/bike-list.component';
import { BikeDataService } from './bike-data.service';
import { SharedModule } from '../shared/shared.module';
import { MapViewComponent } from './map-view/map-view.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { BikeViewComponent } from './bike-view/bike-view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    BikesRoutingModule
  ],
  declarations: [BikeListComponent, MapViewComponent, BikeDetailsComponent, BikeViewComponent],
  providers: [BikeDataService]
})
export class BikesModule { }
