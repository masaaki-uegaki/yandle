import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { MapsComponent }           from './maps.component';

import { MapsRoutingModule }       from './maps-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MapsRoutingModule
  ],
  declarations: [
    MapsComponent,
  ]
})
export class MapsModule {}