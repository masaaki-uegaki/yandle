import { Component, OnInit } from '@angular/core';

// 以下追加したもの
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthUser } from '../../../typings.d';
import { User } from '../../../typings.d';
import { AuthService } from '../../shared/auth/auth.service';
import { AppConsts } from '../../app.constants';
import { LoginConsts } from './login.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authUser: AuthUser = {
    email: '',
    password: '',
  };
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService,
    private route: ActivatedRoute,
  ) {
  }

  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]]
    });

    if (this.router.url === LoginConsts.ROUTE_URLS.LOGOUT) {
      this.logout();
      return;
    }

    this.auth.user.subscribe(user => {
      if (user !== null) {
        this.router.navigate([AppConsts.ROOT_ROUTE_URL.ROOT]);
      }
    });
  }

  setAuthUser() {
    this.authUser.email = this.email.value;
    this.authUser.password = this.password.value;
  }

  login() {
    this.setAuthUser();
    this.auth.login(this.authUser.email, this.authUser.password)
      .then((err: string | User) => {
        if (typeof err === 'string') {
          return;
        }
        this.router.navigate([AppConsts.ROOT_ROUTE_URL.ROOT]);
      });
  }

  googleLogin() {
    this.setAuthUser();
    this.auth.googleLogin()
      .then((err: string | User) => {
        if (typeof err === 'string') {
          return;
        }
        this.router.navigate([AppConsts.ROOT_ROUTE_URL.ROOT]);
      });
  }

  logout() {
    this.auth.logout()
      .then((err: string | User) => {
        if (typeof err === 'string') {
          return;
        }
        this.router.navigate([LoginConsts.ROUTE_URLS.LOGIN]);
      });
  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }
}
