import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { GraphsComponent }           from './graphs.component';

import { GraphsRoutingModule }       from './graphs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GraphsRoutingModule
  ],
  declarations: [
    GraphsComponent,
  ]
})
export class GraphsModule {}