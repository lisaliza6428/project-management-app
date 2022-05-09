/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileFormComponent } from '../../components/edit-profile-form/edit-profile-form.component';
import { DeleteProfileModalComponent } from '../../components/delete-profile-modal/delete-profile-modal.component';
import { AuthDataModel } from '../../models/models';
import { TranslateLoader } from '@ngx-translate/core';


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
    this.dialog.open(DeleteProfileModalComponent, {
      panelClass: 'confirmForm',
    });
  }

  getAuthData() {
    const auth = localStorage.getItem('auth');
    if (auth) {
      const info = JSON.parse(auth);
      console.log(info);
      return info;
    }
  }
}
