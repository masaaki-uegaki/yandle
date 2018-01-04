import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './component/login/auth/auth.guard';
import { AppConsts } from './app.constants';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: AppConsts.ROOT_ROUTES.ROOT, redirectTo: AppConsts.ROOT_ROUTE_URL.MAPS, pathMatch: 'full' },
  { path: AppConsts.ROOT_ROUTES.HOME, loadChildren: './component/home/home.module#HomeModule' },
  { path: AppConsts.ROOT_ROUTES.AUTH, loadChildren: './component/login/login.module#LoginModule' },
  { path: AppConsts.ROOT_ROUTES.USER_SIGNUP, loadChildren: './component/user-signup/user-signup.module#UserSignupModule' },
  { path: AppConsts.ROOT_ROUTES.MAPS, loadChildren: './component/maps/maps.module#MapsModule', canActivate: [AuthGuard] },
  { path: AppConsts.ROOT_ROUTES.MOMENTS, loadChildren: './component/moments/moments.module#MomentsModule', canActivate: [AuthGuard] },
  { path: AppConsts.ROOT_ROUTES.GRAPHS, loadChildren: './component/graphs/graphs.module#GraphsModule', canActivate: [AuthGuard] },
  { path: AppConsts.ROOT_ROUTES.NOTIFICATIONS, loadChildren: './component/notifications/notifications.module#NotificationsModule', canActivate: [AuthGuard] },
  { path: AppConsts.ROOT_ROUTES.MESSAGES, loadChildren: './component/messages/messages.module#MessagesModule', canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
