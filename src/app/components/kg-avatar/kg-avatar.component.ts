import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kg-avatar',
  templateUrl: './kg-avatar.component.html',
  styleUrls: ['./kg-avatar.component.css']
})
export class KgAvatarComponent implements OnInit {

  private avatarUrl: string;

  constructor() { }

  ngOnInit() {
    this.avatarUrl = './assets/img/kerronb.svg';
  }

}
