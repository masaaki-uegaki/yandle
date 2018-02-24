import { Moment } from 'moment';

export interface Chat {
    id: number;
    uid: string;
    message: string;
    createdAt: string | Moment;
}
