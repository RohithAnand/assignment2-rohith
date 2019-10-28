import { Component, OnInit } from '@angular/core';
import { RestaurantapiService } from '../restaurantapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private restaurantAPI:RestaurantapiService) { }
  restaurants:any;
  city:string;
  showprof:boolean; 
  current:any; 
  prof:any;

  ngOnInit() {
  }
  findRestaurants()
  {
    this.restaurantAPI.getInfo(this.city).subscribe((data)=>{
    this.restaurants=data['results'];
    },(error)=>{
      console.log(error);
    });
  }
  displayprofile(restaurant){
    this.showprof=true;
    this.current=restaurant;
    this.restaurantAPI.setRestinfo(restaurant);
  }
}
