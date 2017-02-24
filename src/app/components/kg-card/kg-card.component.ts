import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { KgDataService } from '../../services/kg-data.service';

@Component({
  selector: 'app-kg-card',
  templateUrl: './kg-card.component.html',
  styleUrls: ['./kg-card.component.css'],
  providers: [KgDataService]
})
export class KgCardComponent implements OnInit, OnDestroy {

  private portfolios: any;
  private key: any;
  private cardData: any;

  constructor(private _KgDataService: KgDataService) { }

  ngOnInit() {
    this.cardData = this._KgDataService.getPortfolios().subscribe(data => this.portfolios = data.portfolios);
  }

  ngOnDestroy() {
    this.cardData.unsubscribe();
  }

}

