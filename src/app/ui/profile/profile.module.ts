import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [ProfileComponent],
  exports: [ProfileComponent]
})
export class ProfileModule { }