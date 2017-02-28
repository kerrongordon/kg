import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kg-home',
  templateUrl: './kg-home.component.html',
  styleUrls: ['./kg-home.component.css']
})
export class KgHomeComponent implements OnInit {

  private title = 'Kerron Gordon';

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit() {
    const page = this.route.fragment['_value'];

    setTimeout(() => {
      document.getElementById('home').classList.add('is-active');
      if (page) { window.location.href = `#${page}`; }
      return;
    }, 100);
  }

}
