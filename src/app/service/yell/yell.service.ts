import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment'; 
import * as firebase from 'firebase';

import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Yell } from '../../model/yell';

@Injectable()
export class YellService {

    constructor(private db: AngularFirestore) { }

    getMoments(): Observable<Yell[]> {
        return this.db.collection<Yell>('yells', ref => ref.orderBy('createdAt', 'desc')).valueChanges();
    }

    addYell(yell: Yell) {
        yell.createdAt = moment(yell.createdAt).format('YYYY-MM-DD HH:mm:ss')
        this.db.collection<Yell>('/yells').add(yell);
    }
}
