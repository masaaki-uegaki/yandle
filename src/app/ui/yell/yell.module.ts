import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { YellComponent } from './yell.component';
import { ReactiveFormsModule }   from '@angular/forms';

@NgModule({
  imports: [ RouterModule, CommonModule, ReactiveFormsModule ],
  declarations: [ YellComponent ],
  exports: [ YellComponent ]
})
export class YellModule {}