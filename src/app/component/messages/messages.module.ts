import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angulartics2Module } from 'angulartics2';

import { MessagesComponent } from './messages.component';

import { MessagesRoutingModule } from './messages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MessagesRoutingModule,
    Angulartics2Module,
  ],
  declarations: [
    MessagesComponent,
  ]
})
export class MessagesModule { }
