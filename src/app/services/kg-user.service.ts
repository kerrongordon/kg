import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class KgUserService  {

  private loggedIn = false;

  constructor(private af: AngularFire) {

  }

  passwordLogin(email, pass) {
    this.af.auth.login({
      email: email,
      password: pass,
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    });
  }

  logout() {
    this.af.auth.logout();
  }

  isLoggedIn() {
    return this.loggedIn;
  }


}
