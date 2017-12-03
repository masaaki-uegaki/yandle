import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GlobalNavbarComponent } from './global-navbar.component';

@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [ GlobalNavbarComponent ],
  exports: [ GlobalNavbarComponent ]
})
export class GlobalNavbarModule {}