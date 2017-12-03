import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    CommonModule,
    // NgbModule,
    MDBBootstrapModule,
  ],
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent]
})
export class UiModule { }
