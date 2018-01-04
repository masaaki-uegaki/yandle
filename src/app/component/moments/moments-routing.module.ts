import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MomentsConsts } from './moments.constants';
import { MomentsComponent } from './moments.component';

const routes: Routes = [
  {
    path: '',
    component: MomentsComponent,
    children: [
      {
        path: '',
        children: [
          { path: MomentsConsts.CHILD_ROUTES.MOMENTS, component: MomentsComponent },
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
export class MomentsRoutingModule { }