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
import { MatDialog } from '@angular/material/dialog';
import { Error401ModalComponent } from '../components/error401-modal/error401-modal.component';
import { Error403ModalComponent } from '../components/error403-modal/error403-modal.component';
import { Error409ModalComponent } from '../components/error409-modal/error409-modal.component';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    public router: Router,
    public dialog: MatDialog,
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.getToken();
    request = request.clone({
      setHeaders: { 'Authorization': `Bearer ${token}` },
    });
    // console.log(request);
    return next.handle(request).pipe(
      catchError((error: ErrorModel) => {
        switch (error.status) {
          case 401:
            this.dialog.open(Error401ModalComponent, {
              panelClass: 'confirmForm',
            });
            this.router.navigateByUrl('auth/log-in');
            break;
          case 403:
            this.dialog.open(Error403ModalComponent, {
              panelClass: 'confirmForm',
            });
            break;
          case 409:
            this.dialog.open(Error409ModalComponent, {
              panelClass: 'confirmForm',
            });
            break;
        }
        return throwError(error);
      }),
    );

  }

  getToken() {
    const data = localStorage.getItem('token') || '';
    if (data) {
      const token = JSON.parse(data).token;
      return token;
    }
  }
}
