import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { BikeDataService } from '../bike-data.service';
import { Bike } from '../bike';
import {  } from 'events';

@Component({
  selector: 'sdr-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
  @Output()
  public onSelectionChanged = new EventEmitter<Bike>();
  public bikes : Bike[];

  constructor(private service : BikeDataService ) { }

  ngOnInit() {
    this.service.getBikes()
        .subscribe(bikes =>{
           this.bikes = bikes;
        });
  }

  public selectBike(bike : Bike){
    console.log('bikeChanged');
    this.onSelectionChanged.emit(bike);
  }
}
