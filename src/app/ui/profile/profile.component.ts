import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss']
})

export class ProfileComponent implements OnInit {
  userName: string;

  constructor() { }

  ngOnInit() {
    this.userName = 'ユーザ名';
  }
}