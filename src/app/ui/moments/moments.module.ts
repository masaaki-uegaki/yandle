import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MomentsComponent} from './moments.component';
import {YellService} from '../../service/yell/yell.service';
import {TimestampPipe} from '../../pipe/timestamp/timestamp.pipe';

import {MomentsRoutingModule} 　from './moments-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MomentsRoutingModule
  ],
  declarations: [
    MomentsComponent,
    TimestampPipe,
  ],
  providers: [
    YellService
  ],
})
export class MomentsModule {}