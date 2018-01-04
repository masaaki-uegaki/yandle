import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {GlobalNavbarComponent} from './global-navbar.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

@NgModule({
  imports: [RouterModule, CommonModule, MDBBootstrapModule],
  declarations: [GlobalNavbarComponent],
  exports: [GlobalNavbarComponent]
})
export class GlobalNavbarModule {}