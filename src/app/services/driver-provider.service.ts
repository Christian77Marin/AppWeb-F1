import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{ HttpClient } from '@angular/common/http';
import { Idriver } from '../domain/Idriver';


@Injectable({
  providedIn: 'root'
})
export class DriverProviderService {

  constructor(private http: HttpClient) { }

  getDrivers(url: string): Observable<Idriver[]>{

    return this.http.get<Idriver[]>(url);
    
  }

  getDriverData(url: string):Observable<Idriver>{

    return this.http.get<Idriver>(url);

  }

}
