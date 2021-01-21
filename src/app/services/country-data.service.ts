import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryDataService {

  constructor(private http: HttpClient) { }

  private url:string = environment.infoCountry;

  getInfoCountry(country:string): Observable<any>{
    return this.http.get(this.url+country);
  }

  getAllNames(): Observable<any>{
    return this.http.get(environment.infoCountryAll);
  }
  
}
