import { Component, OnInit } from '@angular/core';
import { MapService } from '../../shared/map/map.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
    location: ILocation = { lat: 35.839404, lng: 137.202668, };
    scrollwheel = true;
    zoom = 11;

    constructor(
        private route: ActivatedRoute,
        private mapService: MapService) {
    }

    ngOnInit() {
        this.setLocation();
    }

    setLocation() {
        this.route.queryParams.subscribe((params) => {
            if (params.lat && params.lng) {
                this.location = { lat: Number.parseFloat(params.lat), lng: Number.parseFloat(params.lng) };
            } else {
                this.mapService.getCurrentLocation()
                    .subscribe((location: ILocation) => {
                        this.location = location;
                    });
            }
        });
    }
}
