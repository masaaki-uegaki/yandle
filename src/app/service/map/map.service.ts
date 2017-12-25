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

    getCurrentLocation(): Observable<Location> {
        return Observable.create(observer => {
            if (!navigator.geolocation) {
                return observer.error();
            }

            let location: Location = {lat: 0, lng: 0};
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    observer.next({lat: position.coords.latitude, lng: position.coords.longitude});
                },
                (error) => {
                    return observer.error(error);
                }
            );
        });
    }
}
