import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KgDataService } from '../../services/kg-data.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-kg-view',
  templateUrl: './kg-view.component.html',
  styleUrls: ['./kg-view.component.css'],
  providers: [KgDataService]
})
export class KgViewComponent implements OnInit, OnDestroy {

  private title: string;
  private mdLink: string;
  private imgLink: string;
  private dataLoad: any;
  thispage = null;
  link = null;

  constructor(private route: ActivatedRoute, private _KgDataService: KgDataService) {   }

  ngOnInit() {
    setTimeout(() => {
      document.getElementById('viewinfor').classList.add('is-active');
    }, 100);

    const page = this.route.snapshot.params['id'];

    this.dataLoad = this._KgDataService.getPortfolios().subscribe(data => {
      this.thispage = data.portfolios.filter(el => el.link === page);
      this.link = this.thispage['0'].link;
      this.title = this.thispage['0'].title;
      this.mdLink = `/data/portfolios/${this.link}/${this.link}.md`;
      this.imgLink = `/data/portfolios/${this.link}/desktop.jpg`;
    });

  }

  ngOnDestroy() {
    this.dataLoad.unsubscribe();
  }

}

