/* eslint-disable import/named */

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  name = '';

  constructor(public authService: AuthService) { 
    this.name = authService.userName;
  }

  ngOnInit() {
    console.log('hi');
    this.authService.userNameChange.subscribe(value => {this.name = value;});
  }

}
