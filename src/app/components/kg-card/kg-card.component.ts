import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kg-card',
  templateUrl: './kg-card.component.html',
  styleUrls: ['./kg-card.component.css']
})
export class KgCardComponent implements OnInit {

  @Input() portfolios: any;

  constructor(private route: Router) { }

  ngOnInit() { }

   goToPortfolio(link): void {
    this.route.navigate(['/portfolio/', link]);
   }

}
