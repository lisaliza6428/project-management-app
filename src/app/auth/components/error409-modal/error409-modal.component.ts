import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TranslateLoader } from '@ngx-translate/core';

@Component({
  selector: 'app-error409-modal',
  templateUrl: './error409-modal.component.html',
  styleUrls: ['./error409-modal.component.scss'],
})
export class Error409ModalComponent {

  constructor(
    public authService: AuthService,
    public router: Router,
    public translate: TranslateLoader,
  ) { }

}
