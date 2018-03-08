import { Component, OnInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { BikeLocation } from '../bikelocation';
import { BikeDataService } from '../bike-data.service';

@Component({
  selector: 'sdr-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  static accessToken = 'pk.eyJ1IjoibG9yZW50enYiLCJhIjoiY2plNng3Z3VpMDUwMzJxcGR6c3JzZ2FieSJ9.y5R9n15Uoh5-CJ_Imr0jLA';
  private _streetMap: L.Map;
  private _bikeLocations: BikeLocation[];
  private _focusedBikeId: number;

  @Input()
  public set focusedBikeId(bikeId: number) {
    if (this._focusedBikeId != bikeId) {
      this._focusedBikeId = bikeId;
      this.focus(bikeId);
    }
  }

  constructor(private bikeDataService: BikeDataService) {
    L.Icon.Default.imagePath = 'assets/';
  }

  ngOnInit() {
    this._streetMap = new L.Map('map', {
      center: [60.3889838, 5.3211889],
      zoom: 11
    });
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: MapViewComponent.accessToken
    }).addTo(this._streetMap);

    this.bikeDataService.getBikeLocations().subscribe(locations => {
      this._bikeLocations = locations;
      locations.forEach(location => {
        let marker = new L.Marker([location.latitude, location.longitude]).addTo(this._streetMap);
      });
    });
  }

  private focus(bikeId: number) {
    let location = this._bikeLocations.find(loc => loc.bikeId === bikeId);
    this._streetMap.setView([location.latitude, location.longitude], 15);
  }
}
