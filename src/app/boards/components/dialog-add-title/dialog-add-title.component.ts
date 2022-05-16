/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/component-selector */
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateLoader } from '@ngx-translate/core';
import { DialogData } from '../../models/boards-models';

@Component({
  selector: 'dialog-add-list',
  templateUrl: './dialog-add-title.component.html',
  styleUrls: ['./dialog-add-title.component.scss'],
})
export class DialogAddList {

  constructor(
    public translate: TranslateLoader,
    public dialogRef: MatDialogRef<DialogAddList>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}