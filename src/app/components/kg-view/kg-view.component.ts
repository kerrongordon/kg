import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kg-view',
  templateUrl: './kg-view.component.html',
  styleUrls: ['./kg-view.component.css']
})
export class KgViewComponent implements OnInit {

  private title: string;

  constructor(private route: ActivatedRoute) {   }

  ngOnInit() {
    setTimeout(() => {
      document.getElementById('viewinfor').classList.add('is-active');
    }, 100);

    const page = this.route.snapshot.params['id'];

    this.title = page;

  }

}

