import { Component } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Yandle';

  constructor(
    private auth: AuthService,
  ) { }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }
}
