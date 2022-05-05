/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      login: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
      ]],
    });
  }

  onSubmit() {
    if (this.formGroup.status === 'VALID') {
      this.authService.createNewUser(this.formGroup.value);
      console.log('VALID!');
    } else {
      console.log('INVALID!');
    }
  }

}
