import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogOutModalComponent } from '../../auth/components/log-out-modal/log-out-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    LogOutModalComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    MatDialogModule,
    MatButtonModule,
  ],
})
export class NgMaterialModule { }
