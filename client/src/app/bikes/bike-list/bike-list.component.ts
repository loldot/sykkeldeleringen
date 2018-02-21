import { Component, OnInit } from '@angular/core';
import { BikeDataService } from '../bike-data.service';
import { Bike } from '../bike';

@Component({
  selector: 'sdr-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
  public bikes : Bike[];
  constructor(private service : BikeDataService ) { }

  ngOnInit() {
    this.service.getBikes()
        .subscribe(bikes =>{
           this.bikes = bikes;
           console.log(bikes.length);
        });
  }
}
