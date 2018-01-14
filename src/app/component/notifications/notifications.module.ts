import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angulartics2Module } from 'angulartics2';

import { NotificationsComponent } from './notifications.component';

import { NotificationsRoutingModule } from './notifications-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    Angulartics2Module,
  ],
  declarations: [
    NotificationsComponent,
  ]
})
export class NotificationsModule { }