import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kg-home',
  templateUrl: './kg-home.component.html',
  styleUrls: ['./kg-home.component.css']
})
export class KgHomeComponent implements OnInit {

  private title = 'Kerron Gordon';

  constructor() {
   }

  ngOnInit() {
    setTimeout(() => {
      document.getElementById('home').classList.add('is-active');
    }, 100);
  }

}
