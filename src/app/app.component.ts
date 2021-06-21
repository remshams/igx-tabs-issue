import { Component } from '@angular/core';
import { LoginService } from './_common/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'igx-tabs-issue';

  constructor(public loginService: LoginService) {}
}
