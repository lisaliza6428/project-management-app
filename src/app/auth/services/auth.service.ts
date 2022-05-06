import { Injectable } from '@angular/core';
import { BASE_URL } from '../../shared/consts';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { SignUpModel, LoginModel } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isLogged = Boolean(localStorage.getItem('token'));

  isLoggedChange: Subject<boolean> = new Subject<boolean>();

  constructor(
    public http: HttpClient,
    public router: Router,
  ) {
    this.isLoggedChange.subscribe((value: boolean) => {
      this.isLogged = value;
    });
  }

  createNewUser(body: SignUpModel) {
    this.http.post(BASE_URL + 'signup', body).subscribe((value) => {
      localStorage.setItem('auth', JSON.stringify(value));
      this.router.navigate(['auth/log-in']);
      // console.log(value);
    });
  }

  logIn(body: LoginModel) {
    this.http.post(BASE_URL + 'signin', body).subscribe((value) => {
      localStorage.setItem('token', JSON.stringify(value));
      this.isLogged = true;
      this.router.navigate(['']);
      // console.log(value);
    });
  }

  logOut() {
    this.isLogged = false;
    localStorage.removeItem('token');
    this.router.navigate(['auth/log-in']);
  }
}
