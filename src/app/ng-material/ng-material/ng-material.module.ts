import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EditProfileFormComponent } from '../../auth/components/edit-profile-form/edit-profile-form.component';
import { TranslateModule } from '@ngx-translate/core'; 
import { ModalComponent } from '../../core/components/modal/modal.component';

@NgModule({
  declarations: [
    EditProfileFormComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [
    MatDialogModule,
    MatButtonModule,
  ],
})
export class NgMaterialModule { }
