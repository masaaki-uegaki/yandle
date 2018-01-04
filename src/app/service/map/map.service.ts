import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Location } from '../../model/location';

@Injectable()
export class MapService {

    constructor() { }

    getCurrentLocation(): Observable<Location> {
        return Observable.create(observer => {
            if (!navigator.geolocation) {
                return observer.error();
            }

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    return observer.next({ lat: position.coords.latitude, lng: position.coords.longitude });
                },
                (error) => {
                    return observer.error(error);
                }
            );
        });
    }
}
