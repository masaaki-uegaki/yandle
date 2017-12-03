import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { MapsComponent }           from './maps.component';

import { MapsRoutingModule }       from './maps-routing.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    MapsRoutingModule,
    AgmCoreModule,
  ],
  declarations: [
    MapsComponent,
  ]
})
export class MapsModule {}