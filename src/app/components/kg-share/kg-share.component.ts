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

  constructor(private route: Router) {  }

  ngOnInit() {
    return this.rountParams = window.location.href;
  }

  shareMe(url): void {
    window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=550,width=400');
  }

  openlink(link): void {
    window.open(link);
  }

}
