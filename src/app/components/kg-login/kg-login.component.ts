import { Component } from '@angular/core';

import { KgUserService } from '../../services/kg-user.service';

@Component({
  selector: 'app-kg-login',
  templateUrl: './kg-login.component.html',
  styleUrls: ['./kg-login.component.css'],
  providers: [KgUserService]
})
export class KgLoginComponent {

  private email = 'kgpsounds.com@gmail.com';
  private password = 'gordon5720';

  constructor(private userService: KgUserService) {  }

  login() {
    this.userService.passwordLogin(this.email, this.password);
  }

  logout() {
     this.userService.logout();
  }
}
