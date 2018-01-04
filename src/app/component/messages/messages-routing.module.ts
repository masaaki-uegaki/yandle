import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppConsts } from '../../app.constants';
import { MessagesComponent } from './messages.component';

const routes: Routes = [
  {
    path: '',
    component: MessagesComponent,
    children: [
      {
        path: '',
        children: [
          { path: AppConsts.ROOT_ROUTES.MESSAGES, component: MessagesComponent },
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
export class MessagesRoutingModule { }