import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { GraphsComponent }           from './graphs.component';

import { GraphsRoutingModule }       from './graphs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GraphsRoutingModule,
    MDBBootstrapModule,
  ],
  declarations: [
    GraphsComponent,
  ]
})
export class GraphsModule {}