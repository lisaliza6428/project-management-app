/* eslint-disable import/named */

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LogOutModalComponent } from '../../../auth/components/log-out-modal/log-out-modal.component';
import { TranslateService, TranslateLoader } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  name = '';

  constructor(
    public authService: AuthService,
    public dialog: MatDialog,
    public translateService: TranslateService,
    public translate: TranslateLoader,
  ) { 
    this.name = authService.userName;
  }

  ngOnInit() {
    this.authService.userNameChange.subscribe(value => {this.name = value;});
  }

  openDialog() {
    this.dialog.open(LogOutModalComponent, {
      panelClass: 'confirmForm',
    });
  }

  onSelected(value: string) {
    if (value === 'en') {
      this.translateService.use('en');
    } else {
      this.translateService.use('ru');
    }
  }

}
