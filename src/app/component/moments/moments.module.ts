import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Angulartics2Module } from 'angulartics2';

import { MomentsComponent } from './moments.component';
import { YellService } from '../../shared/yell/yell.service';
import { ChatService } from '../../shared/chat/chat.service';
import { TimestampPipe } from '../../pipe/timestamp/timestamp.pipe';

import { MomentsRoutingModule } from './moments-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MomentsRoutingModule,
    MDBBootstrapModule,
    Angulartics2Module,
  ],
  declarations: [
    MomentsComponent,
    TimestampPipe,
  ],
  providers: [
    YellService,
    ChatService,
  ],
})
export class MomentsModule { }
