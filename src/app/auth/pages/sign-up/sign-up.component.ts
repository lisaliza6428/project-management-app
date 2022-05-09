/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { validateUpperCase, validateLowerCase, validateNumbers, validateSpecial } from '../../services/validators';


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
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]],
      login: ['', [
        Validators.required,
        Validators.email,
      ]],
      password: ['', [
        Validators.required,
        validateUpperCase,
        validateLowerCase,
        validateNumbers,
        validateSpecial,
        Validators.minLength(8),
      ]],
    });
  }

  get _name() {
    return this.formGroup.controls['name'];
  }

  get _login() {
    return this.formGroup.controls['login'];
  }

  get _password() {
    return this.formGroup.controls['password'];
  }

  onSubmit() {
    if (this.formGroup.status === 'VALID') {
      this.authService.createNewUser(this.formGroup.value);
    }
  }
}
