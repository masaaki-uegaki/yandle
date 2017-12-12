import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { MomentsComponent } from './moments.component';
import { YellService } from '../../service/yell/yell.service';

import { MomentsRoutingModule }　from './moments-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MomentsRoutingModule
  ],
  declarations: [
    MomentsComponent,
  ],
  providers: [
    YellService
  ],
})
export class MomentsModule {}