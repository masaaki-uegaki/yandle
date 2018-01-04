import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// 以下追加したもの
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { User } from '../../model/user';

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
                    return this.db.doc<User>(`users/${user.uid}`).valueChanges();
                } else {
                    return Observable.of(null);
                }
            });
    }

    siginUp(email: string, password: string) {
        return this.auth.auth.createUserWithEmailAndPassword(email, password)
            .then(user => {
                return console.log(user) || this.updateUserData(user);
            })
            .catch(err => console.log(err));
    }

    login(email: string, password: string): Promise<any> {
        return this.auth.auth.signInWithEmailAndPassword(email, password)
            .then(user => {
                return console.log(user) || this.updateUserData(user);
            })
            .catch(err => console.log(err));
    }

    isLoggedIn(): boolean {
        return !!this.auth.auth.currentUser;
    }

    googleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.oAuthLogin(provider);
    }

    logout(): Promise<any> {
        return this.auth.auth.signOut();
    }

    private oAuthLogin(provider) {
        return this.auth.auth.signInWithPopup(provider)
            .then(credential => {
                console.log(credential.user);
                return this.updateUserData(credential.user);
            })
            .catch(err => console.log(err));
    }

    private updateUserData(user: User): Promise<void> {
        const docUser: AngularFirestoreDocument<User> = this.db.doc(`users/${user.uid}`);
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