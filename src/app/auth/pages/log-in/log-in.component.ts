/* eslint-disable import/named */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


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
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
      ]],
    });
  }

  onSubmit() {
    if (this.formGroup.status === 'VALID') {
      console.log('VALID!');
      this.authService.logIn(this.formGroup.value);
    } else {
      console.log('INVALID!');
    }
  }

}
