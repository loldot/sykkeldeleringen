import { Component, OnInit } from '@angular/core';
import  * as L from 'leaflet';
import { BikeDataService } from '../bike-data.service';

@Component({
  selector: 'sdr-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  static accessToken = 'pk.eyJ1IjoibG9yZW50enYiLCJhIjoiY2pkeTd1Z3h0M3pwejJ5cDJiZ2F4MGJzbSJ9.Y0oRnsj8i7zZS7aP03QR_w';
  constructor(private bikeDataService : BikeDataService) { 
  }

  ngOnInit() {
    let m = new L.Map('map', {
      center: [60.3889838,5.3211889],
      zoom: 14
    });

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: MapViewComponent.accessToken
    }).addTo(m);

    L.Icon.Default.imagePath = 'assets/';
    
    this.bikeDataService.getBikeLocations()
        .subscribe(locations => {
          locations.forEach(location => {
            let marker = new L.Marker([location.latitude, location.longitude]).addTo(m);
          });
        });
  }
}
