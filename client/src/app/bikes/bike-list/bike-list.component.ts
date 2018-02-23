import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BikeDataService } from '../bike-data.service';
import { Bike } from '../bike';

@Component({
  selector: 'sdr-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
  private _searchRadius = 10;

  @Output()
  public onSelectionChanged = new EventEmitter<Bike>();
  public bikes: Bike[];

  public isGeoLocationEnabled = () => this.latitude && this.longitude;
  
  public latitude: number;
  public longitude: number;

  public get searchRadius(): number {
    return this._searchRadius;
  }
  public set searchRadius(radius: number) {
    this._searchRadius = radius;
    this.filterBikesByLocation();
  }

  constructor(private service: BikeDataService) { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }

    this.service.getBikes()
      .subscribe(bikes => {
        this.bikes = bikes;
      });
  }

  public filterBikesByLocation() {
    
    this.service.getBikesWithinRadius(this.latitude, this.longitude, this._searchRadius * 1000)
      .subscribe(bikes => {
        this.bikes = bikes;
      });
  }

  public selectBike(bike: Bike) {
    this.onSelectionChanged.emit(bike);
  }
}
