/* eslint-disable import/named */

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TranslateService, TranslateLoader } from '@ngx-translate/core';
import { ModalComponent } from '../modal/modal.component';

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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      name: 'logout',
      message: 'modals.logout.message',
      actionButtonText: 'modals.logout.confirm',
      cancelButtonText: 'modals.logout.cancel',
    };
    this.dialog.open(ModalComponent, dialogConfig);
  }

  onSelected(value: string) {
    if (value === 'en') {
      this.translateService.use('en');
    } else {
      this.translateService.use('ru');
    }
  }

}
