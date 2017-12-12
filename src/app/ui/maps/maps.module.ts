import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { MapsComponent }           from './maps.component';
import { MapService }           from '../../service/map/map.service';

import { MapsRoutingModule }       from './maps-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MapsRoutingModule,
    AgmCoreModule,
  ],
  declarations: [
    MapsComponent,
  ],
  providers: [
    MapService
  ]
})
export class MapsModule {}