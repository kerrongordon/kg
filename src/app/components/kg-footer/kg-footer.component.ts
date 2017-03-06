import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kg-footer',
  templateUrl: './kg-footer.component.html',
  styleUrls: ['./kg-footer.component.css']
})
export class KgFooterComponent implements OnInit {

  @Input() message;
  @Input() update;

  getyear: string;
  copyRight: string;

  constructor() {
    this.getyear = new Date().getFullYear().toString();
  }

  ngOnInit() {
    window.addEventListener('load', () => {
      window.addEventListener('offline', () => {
        const condition = navigator.onLine ? 'Live' : 'You Are Currently offline';
        this.message = condition;
        this.update = !this.update;
      });
    });
    this.copyRight = `Copyright © ${this.getyear} By Kerron Gordon`;
  }

}
