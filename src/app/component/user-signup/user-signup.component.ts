import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConsts } from '../../app.constants';
import { AuthUser } from '../../../typings.d';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: 'user-signup.component.html',
  styleUrls: ['user-signup.component.scss']
})

export class UserSignupComponent implements OnInit {
  authUser: AuthUser = {
    email: '',
    password: '',
  };
  signupForm: FormGroup;

  constructor(
    private router: Router,
    private auth: AuthService,
    private fb: FormBuilder,
  ) { }

  get email(): AbstractControl {
    return this.signupForm.get('email');
  }

  get password(): AbstractControl {
    return this.signupForm.get('password');
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]]
    });
  }

  setAuthUser() {
    this.authUser.email = this.email.value;
    this.authUser.password = this.password.value;
  }

  signup() {
    this.setAuthUser();
    this.auth.siginUp(this.authUser.email, this.authUser.password)
      .then((err: string) => {
        if (err) {
          return;
        }
        this.router.navigate([AppConsts.ROOT_ROUTE_URL.ROOT]);
      });
  }
}
