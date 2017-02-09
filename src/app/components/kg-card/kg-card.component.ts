import { Component, OnInit, Input } from '@angular/core';
import { KgPortfoliosService } from '../../services/kg-portfolios.service';

@Component({
  selector: 'app-kg-card',
  templateUrl: './kg-card.component.html',
  styleUrls: ['./kg-card.component.css'],
  providers: [KgPortfoliosService]
})
export class KgCardComponent implements OnInit {

  private portfolios: any;
  private key: any;

  constructor(private _kgPortfoliosService: KgPortfoliosService) { }

  ngOnInit() {
    return this._kgPortfoliosService.getPortfolios().subscribe(
      (data) => this.portfolios = data
    );
  }

}

