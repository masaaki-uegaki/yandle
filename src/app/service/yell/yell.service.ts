import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment'; 

import { AngularFireDatabase } from 'angularfire2/database';
import { Yell } from '../../model/yell';

@Injectable()
export class YellService {

    constructor(private db: AngularFireDatabase) { }

    getMoments(): Observable<Yell[]> {
        return this.db.list<Yell>('/yells').valueChanges();
    }

    addYell(yell: Yell) {
        yell.createdAt = moment(yell.createdAt).format('YYYY-MM-DD HH:mm:ss')
        this.db.list<Yell>('/yells').push(yell);
    }
}
