import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { CProperty } from '../models/classProperty';
import { Property } from '../models/property';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(SellRent: number): Observable<Property[]> {
    return this.http.get<Array<Property>>("data/properties.json").pipe(
      map(data => {
        const propertiesArray: Property[] = [];
        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].sellRent === SellRent) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    )
  }

  addProperty (property: CProperty){
    localStorage.setItem('newProp', JSON.stringify(property));
  }
}
