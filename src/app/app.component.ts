import { Component } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Yandle';

  constructor(
    private auth: AuthService,
    angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
  ) { }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }
}
