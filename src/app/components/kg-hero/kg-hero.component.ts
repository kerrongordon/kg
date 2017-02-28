import { Component, OnInit } from '@angular/core';
import { KgDataService } from '../../services/kg-data.service';

@Component({
  selector: 'app-kg-hero',
  templateUrl: './kg-hero.component.html',
  styleUrls: ['./kg-hero.component.css'],
  providers: [KgDataService]
})
export class KgHeroComponent implements OnInit {

  private title: string;

  constructor(private _kgDataService: KgDataService) { }

  ngOnInit() {
    return this.title = this._kgDataService.getSiteTitle();
  }

}
