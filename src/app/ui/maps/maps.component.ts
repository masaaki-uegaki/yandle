import { Component, OnInit } from '@angular/core';
import { MapService } from '../../service/map/map.service';
import { Location } from '../../model/location';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  lat: number = 35.839404;
  lng: number = 137.202668;
  scrollwheel: boolean = true;
  zoom = 11;

  constructor(private mapService: MapService) { }

  ngOnInit() {
     this.mapService.getCurrentLocation(
        (location: Location) => {
            this.lat = location.getLat();
            this.lng = location.getLng();
        }
    );
  }
}
