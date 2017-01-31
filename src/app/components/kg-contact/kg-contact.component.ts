import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kg-contact',
  templateUrl: './kg-contact.component.html',
  styleUrls: ['./kg-contact.component.css']
})
export class KgContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: any) {
    console.log(value);
  }

}
