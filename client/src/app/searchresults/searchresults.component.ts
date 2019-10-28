import { Component, OnInit } from '@angular/core';
import { RestaurantapiService } from '../restaurantapi.service';


@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {
  current:any;
  pic:string;
  constructor(private RestinfoAPI:RestaurantapiService) { }

  ngOnInit() {
    this.current=this.RestinfoAPI.profile;
    this.pic=this.current.photos[0].photo_reference;
    }

}
