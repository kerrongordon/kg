import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kg-footer',
  templateUrl: './kg-footer.component.html',
  styleUrls: ['./kg-footer.component.css']
})
export class KgFooterComponent implements OnInit {

  getyear: string;
  copyRight: string;

  constructor() {
    this.getyear = new Date().getFullYear().toString();
  }

  ngOnInit() {
    return this.copyRight = `Copyright © ${this.getyear} By Kerron Gordon`;
  }

}
