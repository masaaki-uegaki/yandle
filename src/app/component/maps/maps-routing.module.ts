import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsConsts } from './maps.constants';
import { MapsComponent } from './maps.component';

const routes: Routes = [
  {
    path: '',
    component: MapsComponent,
    children: [
      {
        path: '',
        children: [
          { path: MapsConsts.CHILD_ROUTES.MAPS, component: MapsComponent },
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
export class MapsRoutingModule { }