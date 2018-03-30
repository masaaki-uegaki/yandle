import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

const API_URL_USERS = 'users';

@Injectable()
export class AuthService {
    user: Observable<IUser | null>;

    constructor(
        private router: Router,
        private auth: AngularFireAuth,
        private db: AngularFirestore
    ) {
        this.user = this.auth.authState
            .switchMap(user => {
                if (user) {
                    return this.db.doc<IUser>(`${API_URL_USERS}/${user.uid}`).valueChanges();
                } else {
                    return Observable.of(null);
                }
            });
    }

    siginUp(email: string, password: string): Promise<IUser | string> {
        return this.auth.auth.createUserWithEmailAndPassword(email, password)
            .then(user => {
                return user;
            })
            .catch(err => {
                return err.message;
            });
    }

    login(email: string, password: string): Promise<IUser | string> {
        return this.auth.auth.signInWithEmailAndPassword(email, password)
            .then((user: IUser) => {
                return user;
            })
            .catch(err => {
                return err.message;
            });
    }

    isLoggedIn(): boolean {
        return !!this.auth.auth.currentUser;
    }

    googleLogin(): Promise<IUser | string> {
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.oAuthLogin(provider);
    }

    logout(): Promise<any> {
        return this.auth.auth.signOut();
    }

    getLoginUser(): IUser {
        return this.auth.auth.currentUser;
    }

    oAuthLogin(provider): Promise<IUser | string> {
        return this.auth.auth.signInWithPopup(provider)
            .then(credential => {
                return credential;
            })
            .catch(err => {
                return err.message;
            });
    }

    updateUserData(user: IUser): Promise<void> {
        const docUser: AngularFirestoreDocument<IUser> = this.db.doc(`${API_URL_USERS}/${user.uid}`);
        const data: IUser = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || '',
            photoURL: user.photoURL || '',
            profile: user.profile || ''
        };
        return docUser.set(data);
    }
}
