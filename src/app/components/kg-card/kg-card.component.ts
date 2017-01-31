import { Component, OnInit, Input } from '@angular/core';
import { KgPortfoliosService } from '../../services/kg-portfolios.service';

@Component({
  selector: 'app-kg-card',
  templateUrl: './kg-card.component.html',
  styleUrls: ['./kg-card.component.css'],
  providers: [KgPortfoliosService]
})
export class KgCardComponent implements OnInit {

  @Input() portfolios: any[];

  constructor(
    private _kgPortfoliosService: KgPortfoliosService
  ) {

  }

  ngOnInit() {
    this.portfolios = this._kgPortfoliosService.getPortfolios();
  }

}

