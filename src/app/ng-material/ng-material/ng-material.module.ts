import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EditProfileFormComponent } from '../../auth/components/edit-profile-form/edit-profile-form.component';
import { LogOutModalComponent } from '../../auth/components/log-out-modal/log-out-modal.component';
import { DeleteProfileModalComponent } from '../../auth/components/delete-profile-modal/delete-profile-modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LogOutModalComponent,
    EditProfileFormComponent,
    DeleteProfileModalComponent,

  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
})
export class NgMaterialModule { }
