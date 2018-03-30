import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeConsts } from './home.constants';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        children: [
          { path: HomeConsts.CHILD_ROUTES.HOME, component: HomeComponent },
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
export class HomeRoutingModule { }
