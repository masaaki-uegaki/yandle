import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSignupConsts } from './user-signup.constants';
import { UserSignupComponent } from './user-signup.component';

const routes: Routes = [
  {
    path: '',
    component: UserSignupComponent,
    children: [
      {
        path: '',
        children: [
          { path: UserSignupConsts.CHILD_ROUTES.USER_SIGNUP, component: UserSignupComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserSignupRoutingModule { }
