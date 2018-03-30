import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MapService {

    constructor() { }

    getCurrentLocation(): Observable<ILocation> {
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
