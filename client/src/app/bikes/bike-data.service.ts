import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bike } from './bike';
import { BikeLocation } from './bikelocation';

@Injectable()
export class BikeDataService {
  static endpoint = 'http://localhost:58451/api'
  constructor(private http: HttpClient) {   }

  public getBikes(){
    return this.http.get<Bike[]>(BikeDataService.endpoint + '/bikes');
  }
  public getBikeById(id : number){
    return this.http.get<Bike>(BikeDataService.endpoint + `/bikes/${id}`);
  }

  public getBikeLocations(){
    return this.http.get<BikeLocation[]>(BikeDataService.endpoint + '/bikelocations');
  }
  public getBikeLocation(id : number){
    return this.http.get<BikeLocation>(BikeDataService.endpoint + `/bikes/${id}/location`);
  }
}
