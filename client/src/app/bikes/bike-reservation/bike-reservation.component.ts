import { Component, OnInit, Input } from '@angular/core';
import { BikeDataService } from '../bike-data.service';
import { Router } from '@angular/router';
import { Time } from '@angular/common';

@Component({
  selector: 'sdr-bike-reservation',
  templateUrl: './bike-reservation.component.html',
  styleUrls: ['./bike-reservation.component.css']
})
export class BikeReservationComponent implements OnInit {
  @Input() bikeId : number;
  public startTime : string;
  public startDate : Date;
  public duration: number;
  

  constructor(
    private bikeSvc : BikeDataService,
  ) { }

  ngOnInit() {
  }

  public reserve(){
    let d = this.startDate;
    let t = this.startTime.split(':');

    let hh = parseInt(t[0]);
    let mm = parseInt(t[1]);
    
    this.bikeSvc.reserveBike(this.bikeId, new Date(d.getFullYear(), d.getMonth(), d.getDate(), hh, mm), this.duration).subscribe(x => console.log(x));
  }
}
