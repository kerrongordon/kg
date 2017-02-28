import { Component, OnInit } from '@angular/core';
import { KgDataService } from '../../services/kg-data.service';

@Component({
  selector: 'app-kg-about',
  templateUrl: './kg-about.component.html',
  styleUrls: ['./kg-about.component.css'],
  providers: [KgDataService]
})
export class KgAboutComponent implements OnInit {

  private content: string;

  constructor(private _kgDataService: KgDataService) { }

  ngOnInit() {
    return this._kgDataService.getSiteDescription().subscribe(data => this.content = data.description);
  }

}
