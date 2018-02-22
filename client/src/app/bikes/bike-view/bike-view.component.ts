import { Component, OnInit } from '@angular/core';
import { Bike } from '../bike';

@Component({
  selector: 'sdr-bike-view',
  templateUrl: './bike-view.component.html',
  styleUrls: ['./bike-view.component.css']
})
export class BikeViewComponent implements OnInit {
  selectedBike : Bike;
  constructor() { }

  ngOnInit() {
  }
  selectBike(bike: Bike){
    this.selectedBike = bike;
    console.log('selected bike=' + bike.id);
  }
}
