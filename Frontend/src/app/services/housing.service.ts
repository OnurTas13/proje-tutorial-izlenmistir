import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { CProperty } from '../models/classProperty';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getProperty(id: number) {
    return this.getAllProperties().pipe(map(propertiesArray => {
      // throw new Error('Some error');
      return propertiesArray.find(p => p.id === id)
    }));
  }

  getAllProperties(sellRent?: number): Observable<CProperty[]> {
    return this.http.get<Array<CProperty>>("data/properties.json").pipe(
      map(data => {
        const propertiesArray: CProperty[] = [];
        const localProperties = JSON.parse(localStorage.getItem('newProp'));
        if (localProperties) {
          for (const id in localProperties) {
            if (sellRent) {
              if (localProperties.hasOwnProperty(id) && localProperties[id].sellRent === sellRent) {
                propertiesArray.push(localProperties[id]);
              }
            } else {
              propertiesArray.push(localProperties[id]);
            }
          }
        }
        for (const id in data) {
          if (sellRent) {
            if (data.hasOwnProperty(id) && data[id].sellRent === sellRent) {
              propertiesArray.push(data[id]);
            }
          }
          else {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    )
    return this.http.get<CProperty[]>('data/properties.json');
  }

  addProperty(property: CProperty) {
    let newProp = [property];

    // Add new property in array if new property already exits in localStorage
    if (localStorage.getItem('newProp')) {
      newProp = [newProp, ...JSON.parse(localStorage.getItem('newProp'))];
    }

    localStorage.setItem('newProp', JSON.stringify(newProp));
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
