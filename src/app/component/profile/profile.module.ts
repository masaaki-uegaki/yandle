import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Angulartics2Module } from 'angulartics2';

import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [RouterModule, CommonModule, Angulartics2Module],
  declarations: [ProfileComponent],
  exports: [ProfileComponent]
})
export class ProfileModule { }
