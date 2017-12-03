import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  lat: number = 35.839404;
  lng: number = 137.202668;

  constructor() { }

  ngOnInit() {
      this.setCurrentPlace();
  }

  setCurrentPlace() {
      if (!navigator.geolocation) {
          return;
      }
      navigator.geolocation.getCurrentPosition(
          (position) => {
              this.lat = position.coords.latitude;
              this.lng = position.coords.longitude;
          },
          (error) => {
          }
      );
  }
}
