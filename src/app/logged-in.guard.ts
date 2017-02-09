import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { KgUserService } from './services/kg-user.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private user: KgUserService) {}

  canActivate() {
    return this.user.isLoggedIn();
  }
}

