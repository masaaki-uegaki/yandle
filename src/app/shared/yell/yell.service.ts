import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class YellService {
    constructor(private db: AngularFirestore) {
    }

    getMoments(): Observable<IYell[]> {
        return this.db.collection<IYell>('yells', ref => ref.orderBy('createdAt', 'desc')).valueChanges();
    }

    addYell(yell: IYell): void {
        yell.createdAt = moment(yell.createdAt).format('YYYY-MM-DD HH:mm:ss');
        this.db.collection<IYell>('/yells').add(yell);
    }
}
