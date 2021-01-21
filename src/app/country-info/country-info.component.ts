import { Component, OnInit } from '@angular/core';
import { CountryDataService } from '../services/country-data.service';
import { GeolocationService } from '../services/geolocation.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit {

  language: string;
  currency: string;
  capital: string;
  country_code: string;
  name: string;
  select: any[] = [];

  constructor(private infoCountry: CountryDataService,
    private geolocation: GeolocationService) {
    this.getUserCountry();
    this.getAllCountries();
  }

  ngOnInit(): void {
  }

  getInfoCountry(country_code: string) {
    (this.infoCountry.getInfoCountry(country_code)).subscribe(
      result => {
        this.language = result.languages;
        this.currency = result.currencies;
        this.capital = result.capital;
        this.name = result.name
      },
      error => {
        const errorMessage = <any>error;
        console.error(errorMessage);
      });
  }

  getUserCountry() {
    (this.geolocation.getCountry()).subscribe(
      result => {
        this.country_code = result.country_code;
        this.getInfoCountry(result.country_code);
      },
      error => {
        const errorMessage = <any>error;
        console.error(errorMessage);
      });
  }

  getAllCountries() {
    (this.infoCountry.getAllNames()).subscribe(
      result => {
        result.forEach(element => {
          this.select.push({ "id": element.alpha2Code, "name": element.name });
        });
      },
      error => {
        const errorMessage = <any>error;
        console.error(errorMessage);
      });
  }

  infoCountrySelect(select_value: any) {
    this.getInfoCountry(select_value.value);
  }

}
