import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GlobalNavbarComponent } from './global-navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Angulartics2Module } from 'angulartics2';

@NgModule({
  imports: [RouterModule, CommonModule, MDBBootstrapModule, Angulartics2Module],
  declarations: [GlobalNavbarComponent],
  exports: [GlobalNavbarComponent]
})
export class GlobalNavbarModule { }