import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TranslateLoader } from '@ngx-translate/core';

@Component({
  selector: 'app-error401-modal',
  templateUrl: './error401-modal.component.html',
  styleUrls: ['./error401-modal.component.scss'],
})
export class Error401ModalComponent {

  constructor(
    public authService: AuthService,
    public router: Router,
    public translate: TranslateLoader,
  ) { }

}
