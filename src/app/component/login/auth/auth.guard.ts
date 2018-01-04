import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// 以下追加したもの
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { map, take, tap } from 'rxjs/operators';
import { AuthService } from '../../../shared/auth/auth.service';
import { LoginConsts } from '../login.constants'

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private auth: AuthService
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.auth.user.pipe(
            take(1),
            map(user => !!user), // userが取得できた場合はtrueを返す
            tap(loggedIn => {
                if (!loggedIn) {
                    this.router.navigate([LoginConsts.ROUTE_URLS.LOGIN]);
                }
            })
        );
    }
}