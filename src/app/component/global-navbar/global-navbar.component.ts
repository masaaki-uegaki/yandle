import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-navbar',
  templateUrl: 'global-navbar.component.html',
  styleUrls: ['global-navbar.component.scss']
})

export class GlobalNavbarComponent implements OnInit {
  isCollapse: boolean;

  constructor() { }

  ngOnInit() {
  }
}
