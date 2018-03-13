import { Component, OnInit, Input } from '@angular/core';
import { BikeDataService } from '../bike-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Bike } from '../bike';
import { isNumber } from 'util';

@Component({
  selector: 'sdr-bike-reservation',
  templateUrl: './bike-reservation.component.html',
  styleUrls: ['./bike-reservation.component.css']
})
export class BikeReservationComponent implements OnInit {
  public bike : Bike;
  public startTime : string;
  public startDate : Date;
  public duration: number;
  

  constructor(
    private bikeSvc : BikeDataService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.bikeSvc.getBikeById(params['id']).subscribe(bike => this.bike = bike);
    });
  }

  public reserve(){
    let d = this.startDate;
    let t = this.startTime.split(':');

    let hh = parseInt(t[0]);
    let mm = parseInt(t[1]);
    
    this.bikeSvc.reserveBike(this.bike.id, new Date(d.getFullYear(), d.getMonth(), d.getDate(), hh, mm), this.duration).subscribe(x => console.log(x));
  }
}
