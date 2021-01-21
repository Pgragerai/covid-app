import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLocationComponent } from './user-location/user-location.component';
import { CovidDataComponent } from './covid-data/covid-data.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import { JokeChuckComponent } from './joke-chuck/joke-chuck.component';
import { NumberDataComponent } from './number-data/number-data.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLocationComponent,
    CovidDataComponent,
    CountryInfoComponent,
    JokeChuckComponent,
    NumberDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
