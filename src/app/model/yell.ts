import { Location } from './location';

export class Yell {
    id: number;
    userId: number;
    message: string;
    location: Location;
    
    constructor(id: number, userId: number, message: string, location: Location) {
        this.id = id;
        this.userId = userId;
        this.message = message;
        this.location = location;
    }
}