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
import { ErrorModel } from '../models/models';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(public router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log(request);

    const token = this.getToken();
    request = request.clone({
      setHeaders: { 'Authorization': `Bearer ${token}` },
    });

    return next.handle(request).pipe(
      catchError((error: ErrorModel) => {
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

  getToken() {
    const data = localStorage.getItem('token') || '';
    if (data) {
      const token  = JSON.parse(data).token;
      return token;
    }
  }
}
