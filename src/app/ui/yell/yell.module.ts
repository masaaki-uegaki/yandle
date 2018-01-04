import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { YellComponent } from './yell.component';
import { ReactiveFormsModule } from '@angular/forms';
import { YellService } from '../../service/yell/yell.service';
import { MapService } from '../../service/map/map.service';

@NgModule({
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  declarations: [YellComponent],
  exports: [YellComponent],
  providers: [
    YellService,
    MapService,
  ],
})
export class YellModule { }