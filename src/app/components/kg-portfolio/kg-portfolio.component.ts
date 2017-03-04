import { Component, OnInit, Output } from '@angular/core';
import { KgDataService } from '../../services/kg-data.service';

@Component({
  selector: 'app-kg-portfolio',
  templateUrl: './kg-portfolio.component.html',
  styleUrls: ['./kg-portfolio.component.css'],
  providers: [KgDataService]
})
export class KgPortfolioComponent implements OnInit {

  private portfolios: Portfolio[];

  constructor(private _KgDataService: KgDataService) { }

  ngOnInit() {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-UA-Compatible';
    meta.content = 'IE=edge';
    document.getElementsByTagName('head')[0].appendChild(meta);
    return this._KgDataService.getPortfolios().subscribe(data => this.portfolios = data.portfolios);
  }

}

interface Portfolio {
  title: string;
  link: string;
  url: string;
}
