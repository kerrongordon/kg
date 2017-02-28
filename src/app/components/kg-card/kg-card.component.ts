import { Component, OnInit } from '@angular/core';
import { KgDataService } from '../../services/kg-data.service';

@Component({
  selector: 'app-kg-card',
  templateUrl: './kg-card.component.html',
  styleUrls: ['./kg-card.component.css'],
  providers: [KgDataService]
})
export class KgCardComponent implements OnInit {

  private portfolios: any;

  constructor(private _KgDataService: KgDataService) { }

  ngOnInit() {
    return this._KgDataService.getPortfolios().subscribe(data => this.portfolios = data.portfolios);
  }

}

