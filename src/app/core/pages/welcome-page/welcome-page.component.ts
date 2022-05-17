import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { TranslateLoader } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent {

  constructor(
    public authService: AuthService,
    public translate: TranslateLoader,
  ) { }

}
