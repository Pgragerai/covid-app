import { Component, OnInit } from '@angular/core';
import { CountryDataService } from '../services/country-data.service';
import { CovidDataService } from '../services/covid-data.service';
import { GeolocationService } from '../services/geolocation.service';

@Component({
  selector: 'app-covid-data',
  templateUrl: './covid-data.component.html',
  styleUrls: ['./covid-data.component.scss']
})
export class CovidDataComponent implements OnInit {

  data: any = [];
  country_code: string;

  constructor(private covidData: CovidDataService,
    private geolocation: GeolocationService,
    private infoCountry: CountryDataService) {
    this.getUserCountry();
  }

  ngOnInit(): void {

  }

  getCovidData(country_name: string) {
    (this.covidData.getCountryData(country_name)).subscribe(
      result => {
        this.data = result.data.covid19Stats;
      },
      error => {
        const errorMessage = <any>error;
        console.error(errorMessage);
      });
  }

  getUserCountry() {
    (this.geolocation.getCountry()).subscribe(
      result => {
        this.getCountryNameEnglish(result.country_code);
      },
      error => {
        const errorMessage = <any>error;
        console.error(errorMessage);
      });
  }

  getCountryNameEnglish(country_code: string) {
    (this.infoCountry.getInfoCountry(country_code)).subscribe(
      result => {
        this.getCovidData(result.name);
      },
      error => {
        const errorMessage = <any>error;
        console.error(errorMessage);
      });
  }

}
