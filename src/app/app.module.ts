import { registerLocaleData } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { UiModule } from './component/ui.module';

import { LoginModule } from './component/login/login.module';
import { UserSignupModule } from './component/user-signup/user-signup.module';

import { HomeModule } from './component/home/home.module';
import { GlobalNavbarModule } from './component/global-navbar/global-navbar.module';
import { YellModule } from './component/yell/yell.module';
import { ProfileModule } from './component/profile/profile.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AgmCoreModule } from '@agm/core';

import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './component/login/auth/auth.guard';

import localeJa from '@angular/common/locales/ja';
registerLocaleData(localeJa);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UiModule,
    LoginModule,
    UserSignupModule,
    HomeModule,
    GlobalNavbarModule,
    YellModule,
    ProfileModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCjzPouajQEKc2cuM0DZoTIbElhpe6mQ-I'
    })
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
