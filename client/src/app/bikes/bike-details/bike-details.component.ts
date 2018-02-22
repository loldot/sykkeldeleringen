import { Component, OnInit, Input } from '@angular/core';
import { Bike } from '../bike';

@Component({
  selector: 'sdr-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent implements OnInit {
  
  private _bike : Bike;
  public get bike() : Bike {
    return this._bike;
  }
  @Input('bike')
  public set bike(bk : Bike ){
    this._bike = bk;
  }
  public bikeLocations = [];
  
  constructor() { }

  ngOnInit() {
  }
}
