import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { UserSignupRoutingModule } from './user-signup-routing.module';
import { UserSignupComponent } from './user-signup.component';

@NgModule({
  imports: [RouterModule, CommonModule, ReactiveFormsModule, UserSignupRoutingModule],
  declarations: [UserSignupComponent]
})
export class UserSignupModule { }