import { Injectable } from '@angular/core';
import { BASE_URL } from '../../shared/consts';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { SignUpModel, LoginModel, AuthDataModel } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isLogged = this.checkAuthorization();

  userName = '';

  isLoggedChange: Subject<boolean> = new Subject<boolean>();

  userNameChange: Subject<string> = new Subject<string>();


  constructor(
    public http: HttpClient,
    public router: Router,
  ) {
    this.isLoggedChange.subscribe((value: boolean) => {
      this.isLogged = value;
    });
    this.userNameChange.subscribe((value: string) => {
      this.userName = value;
    });
    this.getUserName();
  }

  checkAuthorization() {
    return Boolean(localStorage.getItem('token'));
  }


  getUserName() {
    const auth = localStorage.getItem('auth');
    if (auth && this.isLogged) {
      const authData: AuthDataModel = JSON.parse(auth);
      this.userName = authData.name;
    } else {
      this.userName = 'User';
    }
    this.userNameChange.next(this.userName);
  }

  createNewUser(body: SignUpModel) {
    this.http.post(BASE_URL + 'signup', body).subscribe((value) => {
      localStorage.setItem('auth', JSON.stringify(value));
      this.router.navigate(['auth/log-in']);
      // console.log(value);
    });
  }

  getUsers() {
    this.http.get(BASE_URL + 'users').subscribe((value) => {
      //console.log(value);
    });
  }

  logIn(body: LoginModel) {
    this.http.post(BASE_URL + 'signin', body).subscribe((value) => {
      localStorage.setItem('token', JSON.stringify(value));
      this.isLogged = true;
      this.getUserName();
      this.router.navigate(['']);
      //console.log(value);
    });
  }

  logOut() {
    this.isLogged = false;
    localStorage.removeItem('token');
    this.router.navigate(['welcome']);
  }

  deleteUser() {
    const info = localStorage.getItem('auth');
    if (info) {
      const userId = JSON.parse(info).id;
      this.http.delete(BASE_URL + `users/${userId}`).subscribe(() => {
        localStorage.removeItem('auth');
        this.logOut();
      });
    }
  }

  updateUser(body: LoginModel) {
    const info = localStorage.getItem('auth');
    if (info) {
      const userId = JSON.parse(info).id;
      this.http.put(BASE_URL + `users/${userId}`, body).subscribe((value) => {
        // console.log(value);
        localStorage.setItem('auth', JSON.stringify(value));
        this.getUserName();
      });
    }
  }
}
