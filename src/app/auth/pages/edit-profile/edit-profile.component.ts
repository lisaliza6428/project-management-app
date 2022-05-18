/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditProfileFormComponent } from '../../components/edit-profile-form/edit-profile-form.component';
import { AuthDataModel } from '../../models/models';
import { TranslateLoader } from '@ngx-translate/core';
import { ModalComponent } from '../../../core/components/modal/modal.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {

  authData: AuthDataModel;

  constructor(
    public dialog: MatDialog,
    public translateLoader: TranslateLoader,
    public authService: AuthService,
  ) {
    this.authData = authService.userInfo;
  }

  ngOnInit(): void {
    this.authService.userInfoChange.subscribe(value => { this.authData = value; });
  }

  openEditForm() {
    this.dialog.open(EditProfileFormComponent, {
      panelClass: 'editProfileForm',
    });
  }

  openConfirmDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      name: 'deleteProfile',
      message: 'modals.deleteProfile.message',
      actionButtonText: 'modals.deleteProfile.confirm',
      cancelButtonText: 'modals.deleteProfile.cancel',
    };
    this.dialog.open(ModalComponent, dialogConfig);
  }

  goBack() {
    history.back();
  }
}
