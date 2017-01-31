import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kg-hero',
  templateUrl: './kg-hero.component.html',
  styleUrls: ['./kg-hero.component.css']
})
export class KgHeroComponent implements OnInit {

  private title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Kerron Gordon';
  }

}
