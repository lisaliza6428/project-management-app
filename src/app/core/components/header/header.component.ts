/* eslint-disable import/named */

import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TranslateService, TranslateLoader } from '@ngx-translate/core';
import { ModalComponent } from '../modal/modal.component';
import { AuthDataModel } from '../../../auth/models/models';
import { BoardsPageComponent } from '../../../boards/pages/boards-page/boards-page.component';
import { BoardsService } from '../../../boards/services/boards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  authData: AuthDataModel;

  isSticky: boolean = false;

  constructor(
    public authService: AuthService,
    public boardsService: BoardsService,
    public dialog: MatDialog,
    public translateService: TranslateService,
    public translate: TranslateLoader,
    public router: Router,
  ) {
    this.authData = authService.userInfo;
  }

  ngOnInit() {
    this.authService.userInfoChange.subscribe(value => {this.authData = value;});
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
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

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 80;
  }

  sendEventCreateBoard() {
    const boardsPageComponent = new BoardsPageComponent(
      this.boardsService,
      this.dialog,
      this.router,
    );
    boardsPageComponent.openDialogCreateBoard();
  }
}
