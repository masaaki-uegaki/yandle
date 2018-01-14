import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angulartics2Module } from 'angulartics2';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { GlobalNavbarModule } from '../global-navbar/global-navbar.module';
import { YellModule } from '../yell/yell.module';
import { ProfileModule } from '../profile/profile.module';

@NgModule({
  imports: [
    CommonModule,
    GlobalNavbarModule,
    YellModule,
    ProfileModule,
    HomeRoutingModule,
    Angulartics2Module,
  ],
  declarations: [
    HomeComponent,
  ]
})
export class HomeModule { }