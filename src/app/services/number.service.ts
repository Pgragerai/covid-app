import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor(private http: HttpClient) { }

  private url:string = environment.number;

  getData(): Observable<any>{
    return this.http.get(this.url);
  }
}
