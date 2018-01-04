import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MomentsComponent } from './moments.component';

const routes: Routes = [
  {
    path: '',
    component: MomentsComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'moments', component: MomentsComponent },
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