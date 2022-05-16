import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ModalActionsService {

  constructor(
    public authService: AuthService,
  ) { }

  modalAction(modalData: any) {
    switch (modalData.name) {
      case 'logout':
        this.authService.logOut();
        break;
      
      case 'deleteProfile':
        this.authService.deleteUser();
        break;
        
      default:
        break;
    }
  }
}
