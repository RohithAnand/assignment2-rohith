import { Component } from '@angular/core';
import { RestaurantapiService } from './restaurantapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private restinfoservice:RestaurantapiService){};
  title = 'my-app';
}
