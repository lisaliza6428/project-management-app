import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  name = '';

  constructor(public authService: AuthService) { 
    this.getUserName();
  }

  getUserName() {
    const auth = localStorage.getItem('auth');
    if (auth && this.authService.isLogged) {
      const authData = JSON.parse(auth);
      this.name = authData.name;
    }
  }
}
