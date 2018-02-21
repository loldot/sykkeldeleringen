import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BikeDataService {
  static endpoint = 'http://localhost:58451/api/bikes'
  constructor(private http: HttpClient) {   }

  public getBikes(){
    return this.http.get(BikeDataService.endpoint);
  }
  public getBikeById(id : number){
    return this.http.get(BikeDataService.endpoint + `/${id}`);
  }
}
