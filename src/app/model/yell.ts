import { Location } from './location';
import { Moment } from 'moment';

export interface Yell {
    id: number;
    userId: number;
    userName: string;
    message: string;
    location: Location;
    createdAt: string | Moment;
}