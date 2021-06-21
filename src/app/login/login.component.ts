import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoginService } from '../_common/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  logIn() {
    this.loginService.logIn();
  }
}
