import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { User } from '../../../typings.d';

const API_URL_USERS = 'users';

@Injectable()
export class AuthService {
    user: Observable<User | null>;

    constructor(
        private router: Router,
        private auth: AngularFireAuth,
        private db: AngularFirestore
    ) {
        this.user = this.auth.authState
            .switchMap(user => {
                if (user) {
                    return this.db.doc<User>(`${API_URL_USERS}/${user.uid}`).valueChanges();
                } else {
                    return Observable.of(null);
                }
            });
    }

    siginUp(email: string, password: string): Promise<User | string> {
        return this.auth.auth.createUserWithEmailAndPassword(email, password)
            .then(user => {
                return user;
            })
            .catch(err => {
                return err.message;
            });
    }

    login(email: string, password: string): Promise<User | string> {
        return this.auth.auth.signInWithEmailAndPassword(email, password)
            .then((user: User) => {
                return user;
            })
            .catch(err => {
                return err.message;
            });
    }

    isLoggedIn(): boolean {
        return !!this.auth.auth.currentUser;
    }

    googleLogin(): Promise<User | string> {
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.oAuthLogin(provider);
    }

    logout(): Promise<any> {
        return this.auth.auth.signOut();
    }

    getLoginUser(): User {
        return this.auth.auth.currentUser;
    }

    oAuthLogin(provider): Promise<User | string> {
        return this.auth.auth.signInWithPopup(provider)
            .then(credential => {
                return credential;
            })
            .catch(err => {
                return err.message;
            });
    }

    updateUserData(user: User): Promise<void> {
        const docUser: AngularFirestoreDocument<User> = this.db.doc(`${API_URL_USERS}/${user.uid}`);
        const data: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || '',
            photoURL: user.photoURL || '',
            profile: user.profile || ''
        };
        return docUser.set(data);
    }
}
