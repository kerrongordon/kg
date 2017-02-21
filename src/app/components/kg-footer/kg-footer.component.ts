import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kg-footer',
  templateUrl: './kg-footer.component.html',
  styleUrls: ['./kg-footer.component.css']
})
export class KgFooterComponent implements OnInit {

  year: string;
  copyRight: string;

  constructor() { }

  ngOnInit() {
  	const year = new Date().getFullYear();
  	this.year = year.toString();
  	this.copyRight = `Copyright © ${year} By Kerron Gordon`;
  }

}
