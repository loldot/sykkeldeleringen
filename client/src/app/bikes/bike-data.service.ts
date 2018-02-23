import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bike } from './bike';
import { BikeLocation } from './bikelocation';
import { environment } from '../../environments/environment';

@Injectable()
export class BikeDataService {
  
  constructor(private http: HttpClient) {   }

  public getBikes(){
    return this.http.get<Bike[]>(`${environment.apiEndpoint}/bikes`);
  }
  public getBikesWithinRadius(lat: number, long: number, searchRadius: number): any {
    return this.http.get<Bike[]>(`${environment.apiEndpoint}/bikes?lat=${lat}&long=${long}&radius=${searchRadius}`);
  }
  public getBikeById(id : number){
    return this.http.get<Bike>(`${environment.apiEndpoint}/bikes/${id}`);
  }

  public getBikeLocations(){
    return this.http.get<BikeLocation[]>(`${environment.apiEndpoint}/bikelocations`);
  }
  public getBikeLocation(id : number){
    return this.http.get<BikeLocation>(`${environment.apiEndpoint}/bikes/${id}/location`);
  }
}
