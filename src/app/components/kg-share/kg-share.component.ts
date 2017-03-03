import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kg-share',
  templateUrl: './kg-share.component.html',
  styleUrls: ['./kg-share.component.css']
})
export class KgShareComponent implements OnInit {

  @Input() share: any;
  public rountParams;
  public domain = 'kerrongordon-8f9c4.firebaseapp.com';

  constructor(private route: Router) {  }

  ngOnInit() {
    const rountParams = this.route.url;
    return this.rountParams = this.domain + rountParams;
  }

  openlink(link): void {
    window.open(link);
  }

}
