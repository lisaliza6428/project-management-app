import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-delete-profile-modal',
  templateUrl: './delete-profile-modal.component.html',
  styleUrls: ['./delete-profile-modal.component.scss'],
})
export class DeleteProfileModalComponent {

  constructor(
    public authService: AuthService,
    public router: Router,
  ) { }

  logOut() {
    this.authService.deleteUser();
  }

}
