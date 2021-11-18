import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, concatMap, retry, retryWhen } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log("httperror interceptor is started");
    return next.handle(request)
      .pipe(
        retryWhen(error =>this.retryRequest(error,10)),
        catchError((error: HttpErrorResponse) => {
          const errorMessage = this.setError(error);
          console.log(error);
          this.toastr.error(errorMessage);
          return throwError(errorMessage);
        })
      );
  }

  retryRequest(error:Observable<any>, retryCount:number):Observable<any>
  {
    return error.pipe(
      concatMap((checkErr: HttpErrorResponse, count: number) => {
        //if errorStatus is 0 and count is smaller than retryCount, it returns checkErr as an observable.
        if (count<=retryCount) {
          switch (checkErr.status) {
            case 0:
              
              return of(checkErr);
              
          }
        }
        //Otherwise it throws an error. 
        return throwError(checkErr);
      })
    )
  }

  setError(error: HttpErrorResponse): string {
    let errorMessage = "Unknown error occured";
    if (error.error instanceof ErrorEvent) {
      //Client side error
      errorMessage = error.error.message;
    } else {
      if (error.status !== 0) {
        errorMessage = error.error;
      }
    }
    return errorMessage;
  }
}
