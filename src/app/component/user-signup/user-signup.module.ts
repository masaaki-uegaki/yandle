import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Angulartics2Module } from 'angulartics2';

import { UserSignupRoutingModule } from './user-signup-routing.module';
import { UserSignupComponent } from './user-signup.component';

@NgModule({
  imports: [RouterModule, CommonModule, ReactiveFormsModule, UserSignupRoutingModule, Angulartics2Module],
  declarations: [UserSignupComponent]
})
export class UserSignupModule { }
