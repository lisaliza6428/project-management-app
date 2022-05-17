/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditProfileFormComponent } from '../../components/edit-profile-form/edit-profile-form.component';
import { AuthDataModel } from '../../models/models';
import { TranslateLoader } from '@ngx-translate/core';
import { ModalComponent } from '../../../core/components/modal/modal.component';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {

  auth: AuthDataModel = this.getAuthData();

  constructor(
    public dialog: MatDialog,
    public translateLoader: TranslateLoader,
  ) { }

  ngOnInit(): void {
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

  getAuthData() {
    const auth = localStorage.getItem('auth');
    if (auth) {
      const info = JSON.parse(auth);
      return info;
    }
  }

  goBack() {
    history.back();
  }
}
