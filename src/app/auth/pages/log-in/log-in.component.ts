/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { validateUpperCase, validateLowerCase, validateNumbers, validateSpecial } from '../../services/validators';
import { TranslateLoader } from '@ngx-translate/core';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public translate: TranslateLoader,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
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

  get _login() {
    return this.formGroup.controls['login'];
  }

  get _password() {
    return this.formGroup.controls['password'];
  }

  onSubmit() {
    if (this.formGroup.status === 'VALID') {
      this.authService.logIn(this.formGroup.value);
    }
  }

}
