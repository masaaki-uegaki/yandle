import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'global-navbar',
  templateUrl: 'global-navbar.component.html',
  styleUrls: [ 'global-navbar.component.scss' ]
})

export class GlobalNavbarComponent implements OnInit {
  isCollapse: boolean = false;

  constructor() {}

  ngOnInit() {
  }
}