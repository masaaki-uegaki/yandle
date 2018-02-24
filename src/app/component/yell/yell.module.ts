import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { YellComponent } from './yell.component';
import { ReactiveFormsModule } from '@angular/forms';
import { YellService } from '../../shared/yell/yell.service';
import { MapService } from '../../shared/map/map.service';
import { Angulartics2Module } from 'angulartics2';

@NgModule({
  imports: [RouterModule, CommonModule, ReactiveFormsModule, Angulartics2Module],
  declarations: [YellComponent],
  exports: [YellComponent],
  providers: [
    YellService,
    MapService,
  ],
})
export class YellModule { }
