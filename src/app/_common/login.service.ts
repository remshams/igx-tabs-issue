import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isLoggedIn: BehaviorSubject<boolean>;
  private loginPending: BehaviorSubject<boolean>;
  readonly isLoggedIn$: Observable<boolean>;
  readonly loginPending$: Observable<boolean>;

  constructor(private router: Router) {
    this.isLoggedIn = new BehaviorSubject(false as boolean);
    this.loginPending = new BehaviorSubject(false as boolean);
    this.isLoggedIn$ = this.isLoggedIn.asObservable();
    this.loginPending$ = this.loginPending.asObservable();
  }

  logIn(): Observable<void> {
    this.loginPending.next(true);
    const result = new Subject<void>();
    setTimeout(async () => {
      this.isLoggedIn.next(true);
      await this.router.navigateByUrl('/main');
      this.loginPending.next(false);
      result.next();
      result.complete();
    }, 2000);
    return result.asObservable();
  }
}
