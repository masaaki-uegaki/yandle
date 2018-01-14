import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesConsts } from './messages.constants';
import { MessagesComponent } from './messages.component';

const routes: Routes = [
  {
    path: '',
    component: MessagesComponent,
    children: [
      {
        path: '',
        children: [
          { path: MessagesConsts.CHILD_ROUTES.MESSAGES, component: MessagesComponent },
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