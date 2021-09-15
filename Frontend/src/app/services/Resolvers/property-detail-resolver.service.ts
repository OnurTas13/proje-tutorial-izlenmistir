import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CProperty } from 'src/app/models/classProperty';
import { HousingService } from '../housing.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailResolverService implements Resolve<CProperty> {

  constructor(private housingService: HousingService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CProperty> | CProperty {
    const propId = route.params['id'];
    return this.housingService.getProperty(+propId)
    .pipe(
      catchError(error => {
        this.router.navigate(['/'])
        return of(null);
      })
    );
    
  }
}
