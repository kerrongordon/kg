import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private pageTitle: Title) {}

  onActivate(e, outlet) {
    window.scrollTo(0, 0);
    this.pageTitle.setTitle(e.title);
  }
}
