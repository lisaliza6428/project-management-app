/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileFormComponent } from '../../components/edit-profile-form/edit-profile-form.component';
import { DeleteProfileModalComponent } from '../../components/delete-profile-modal/delete-profile-modal.component';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {

  }

  openForm() {
    console.log('update form');
    this.dialog.open(EditProfileFormComponent, {});
  }

  openDialog() {
    console.log('delete user');
    this.dialog.open(DeleteProfileModalComponent, {});
  }

}
