import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantapiService {
  placeurl='/api/data?place=';
  profile:any;
  constructor(private http:HttpClient){}
  getInfo(city)
  {
    return this.http.get<any>(this.placeurl+city);
  }
  setRestinfo(profile:any)
  {
    this.profile=profile;
  }
}
