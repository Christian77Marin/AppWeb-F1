import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RacesProviderService {

  constructor(private http: HttpClient) { }



  getDrivers(url: string): Observable<string[]>{

    return this.http.get<string[]>(url);
    
  }
}
