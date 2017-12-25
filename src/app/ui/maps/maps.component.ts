import { Component, OnInit } from '@angular/core';
import { MapService } from '../../service/map/map.service';
import { Location } from '../../model/location';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  location: Location = {lat: 35.839404, lng: 137.202668};
  scrollwheel: boolean = true;
  zoom = 11;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mapService: MapService) {
    }

  ngOnInit() {
      this.mapService.getCurrentLocation()
          .subscribe((location: Location) => {
              this.location = location;
          });
  }
}
