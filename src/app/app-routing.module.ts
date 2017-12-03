import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/maps', pathMatch: 'full' },
    { path: 'maps', loadChildren: './ui/maps/maps.module#MapsModule'},
    { path: 'moments', loadChildren: './ui/moments/moments.module#MomentsModule'},
    { path: 'graphs', loadChildren: './ui/graphs/graphs.module#GraphsModule'},
    { path: 'notifications', loadChildren: './ui/notifications/notifications.module#NotificationsModule'},
    { path: 'messages', loadChildren: './ui/messages/messages.module#MessagesModule'},
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
