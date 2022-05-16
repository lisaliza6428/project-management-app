import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalActionsService } from '../../services/modal-actions.service';
import { TranslateLoader } from '@ngx-translate/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    public modalService: ModalActionsService,
    public translate: TranslateLoader,
  ) { }

  actionFunction() {
    this.modalService.modalAction(this.modalData);
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

}
