import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { CProperty } from '../models/classProperty';
import { map } from 'rxjs/operators';
import { Property } from '../models/property';
import { IkeyValuePair } from '../models/ikeyValuePair';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  baseUrl=environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAllCity():Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + "/city/cities");
  }

  getPropertyType():Observable<IkeyValuePair[]>{
    return this.http.get<IkeyValuePair[]>(this.baseUrl + "/propertytype/list");
  }

  getFurnishingType():Observable<IkeyValuePair[]>{
    return this.http.get<IkeyValuePair[]>(this.baseUrl + "/furnishingtype/list");
  }

  getProperty(id: number) {
   return this.http.get<CProperty>( this.baseUrl + "/property/detail/" + id.toString())
  }

  getAllProperties(sellRent?: number): Observable<CProperty[]> {
    return this.http.get<CProperty[]>(this.baseUrl + '/property/list/' + sellRent.toString());
  }

  addProperty(property: CProperty) {
    const httpOptions = {
      headers : new HttpHeaders({
        Authorization : "Bearer " + localStorage.getItem('token')
      })
    }
   return this.http.post(this.baseUrl + '/property/add', property, httpOptions);
  }

  getPropertyAge(dateofEstablishment: string): string
  {
      const today = new Date();
      const estDate = new Date(dateofEstablishment);
      let age = today.getFullYear() - estDate.getFullYear();
      const m = today.getMonth() - estDate.getMonth();

      // Current month smaller than establishment month or
      // Same month but current date smaller than establishment date
      if (m < 0 || (m === 0 && today.getDate() < estDate.getDate())) {
          age --;
      }

      // Establshment date is future date
      if(today < estDate) {
          return '0';
      }

      // Age is less than a year
      if(age === 0) {
          return 'Less than a year';
      }

      return age.toString();
  }

  newPropID() {
    if (localStorage.getItem('PID')) {
      return +localStorage.getItem('PID') + 1;
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
}
