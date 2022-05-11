import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TranslateLoader } from '@ngx-translate/core';

@Component({
  selector: 'app-error403-modal',
  templateUrl: './error403-modal.component.html',
  styleUrls: ['./error403-modal.component.scss'],
})
export class Error403ModalComponent {

  constructor(
    public authService: AuthService,
    public router: Router,
    public translate: TranslateLoader,
  ) { }

}
