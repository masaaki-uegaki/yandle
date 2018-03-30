import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ChatService {
    constructor(private db: AngularFirestore) {
    }

    getMessages(): Observable<IChat[]> {
        return this.db.collection<IChat>('chat', ref => ref.orderBy('createdAt', 'asc')).valueChanges();
    }

    addMessage(chat: IChat) {
        chat.createdAt = moment(chat.createdAt).format('YYYY-MM-DD HH:mm:ss');
        this.db.collection<IChat>('/chat').add(chat);
    }
}
