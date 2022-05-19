/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { validateUpperCase, validateLowerCase, validateNumbers, validateSpecial } from '../../services/validators';
import { TranslateLoader } from '@ngx-translate/core';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.scss'],
})
export class EditProfileFormComponent implements OnInit {

  show = false;

  formGroup!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public translate: TranslateLoader,
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
      this.authService.updateUser(this.formGroup.value);
    }
  }

  toggleVisibility(e: Event) {
    this.show = !this.show;
    e.preventDefault();
  }
}
