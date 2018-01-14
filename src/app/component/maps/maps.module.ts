import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { Angulartics2Module } from 'angulartics2';

import { MapsComponent } from './maps.component';
import { MapService } from '../../shared/map/map.service';

import { MapsRoutingModule } from './maps-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MapsRoutingModule,
    AgmCoreModule,
    Angulartics2Module,
  ],
  declarations: [
    MapsComponent,
  ],
  providers: [
    MapService
  ]
})
export class MapsModule { }