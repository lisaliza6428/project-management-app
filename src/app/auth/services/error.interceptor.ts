/* eslint-disable import/named */
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Error } from '../models/models';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(public router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log(request);
    return next.handle(request).pipe(
      catchError((error: Error) => {
        switch (error.status) {
          case 401:
            this.router.navigateByUrl('auth/log-in');
            console.log(`error status : ${error.status} ${error.statusText}`);
            break;
          case 403:
            console.log(`error status : ${error.status} ${error.statusText}`);
            break;
          case 409:
            console.log(`error status : ${error.status} ${error.statusText}`);
            break;
        }
        return throwError(error);
      }),
    );
  }
}
