import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-out-modal',
  templateUrl: './log-out-modal.component.html',
  styleUrls: ['./log-out-modal.component.scss'],
})
export class LogOutModalComponent {

  constructor(
    public authService: AuthService,
    public router: Router,
  ) { }

  logOut() {
    this.authService.logOut();
  }

}
