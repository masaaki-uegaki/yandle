import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphsConsts } from './graphs.constants'
import { GraphsComponent } from './graphs.component';

const routes: Routes = [
  {
    path: '',
    component: GraphsComponent,
    children: [
      {
        path: '',
        children: [
          { path: GraphsConsts.CHILD_ROUTES.GRAPHS, component: GraphsComponent },
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
export class GraphsRoutingModule { }
