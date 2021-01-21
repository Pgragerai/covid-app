import { Component, OnInit } from '@angular/core';
import { GeolocationService } from './../services/geolocation.service';

@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.scss']
})
export class UserLocationComponent implements OnInit {

  constructor(private geolocation: GeolocationService) {
    this.getLocation();
  }

  ngOnInit(): void {
  }

  getLocation(){
    (this.geolocation.getCountry()).subscribe(
      result => {
        console.log("*********************************");
        console.log("Datos de localizacón del usuario");
        console.log(result);
        console.log("*********************************");
      },
      error => {
        const errorMessage = <any>error;
        console.error(errorMessage);
      });
  }

}
