import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

import { AngularFirestore } from 'angularfire2/firestore';

import { Chat } from '../../../typings.d';

@Injectable()
export class ChatService {
    constructor(private db: AngularFirestore) {
    }

    getMessages(): Observable<Chat[]> {
        return this.db.collection<Chat>('chat', ref => ref.orderBy('createdAt', 'asc')).valueChanges();
    }

    addMessage(chat: Chat) {
        chat.createdAt = moment(chat.createdAt).format('YYYY-MM-DD HH:mm:ss');
        this.db.collection<Chat>('/chat').add(chat);
    }
}
