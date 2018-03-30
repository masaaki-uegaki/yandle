import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginConsts } from './login.constants';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        children: [
          { path: LoginConsts.CHILD_ROUTES.LOGIN, component: LoginComponent },
          { path: LoginConsts.CHILD_ROUTES.LOGOUT, component: LoginComponent },
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
export class LoginRoutingModule { }
