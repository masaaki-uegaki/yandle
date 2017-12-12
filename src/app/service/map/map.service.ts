import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';
import { Location } from '../../model/location';

interface PositionCallback {
  (position: Position): void;
}
interface PositionErrorCallback {
  (error: PositionError): void;
}

@Injectable()
export class MapService {

    constructor() { }

    getCurrentLocation(callback: Function, errCallback?: Function): Location {
        if (!navigator.geolocation) {
            return errCallback(null);
        }

        let location: Location = new Location(0, 0);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                callback(new Location(position.coords.latitude, position.coords.longitude));
            },
            (error) => {
                return errCallback(error);
            }
        );
    }
}
