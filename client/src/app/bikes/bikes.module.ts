import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BikesRoutingModule } from './bikes-routing.module';
import { BikeListComponent } from './bike-list/bike-list.component';
import { BikeDataService } from './bike-data.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BikesRoutingModule
  ],
  declarations: [BikeListComponent],
  providers: [BikeDataService]
})
export class BikesModule { }
