import { Component, OnInit, OnDestroy } from '@angular/core';
import { KgDataService } from '../../services/kg-data.service';

@Component({
  selector: 'app-kg-about',
  templateUrl: './kg-about.component.html',
  styleUrls: ['./kg-about.component.css'],
  providers: [KgDataService]
})
export class KgAboutComponent implements OnInit, OnDestroy {

  private content: string;
  private aboutData: any;

  constructor(private _kgDataService: KgDataService) { }

  ngOnInit() {
    this.aboutData = this._kgDataService.getSiteDescription().subscribe(data => this.content = data.description);
  }

  ngOnDestroy() {
    this.aboutData.unsubscribe();
  }

}
