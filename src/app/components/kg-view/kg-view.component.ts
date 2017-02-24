import { Component, OnInit, Input, AfterViewInit, AfterContentChecked, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { KgDataService } from '../../services/kg-data.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-kg-view',
  templateUrl: './kg-view.component.html',
  styleUrls: ['./kg-view.component.css'],
  providers: [KgDataService]
})
export class KgViewComponent implements OnInit, AfterViewInit, AfterContentChecked, OnDestroy {

  private title = 'loading page...' ;
  private mdLink: string;
  private imgLink: string;
  private dataLoad: any;
  thispage = null;
  link = null;

  constructor(private route: ActivatedRoute, private router: Router, private _KgDataService: KgDataService) {   }

  ngOnInit() {
    const page = this.route.snapshot.params['id'];

    this.dataLoad = this._KgDataService.getPortfolios().subscribe(data => {
      this.thispage = data.portfolios.filter(el => el.link === page);
      if (this.thispage.length === 0) { setTimeout(() => {this.router.navigate(['/home']);}, 500); return; };
      this.link = this.thispage['0'].link;
      this.title = this.thispage['0'].title;
    });

  }

  ngAfterViewInit() {
    setTimeout(() => { document.getElementById('viewinfor').classList.add('is-active'); }, 100);
  }

  ngAfterContentChecked() {
    if (this.link === null) {
      this.mdLink = '/data/loading.md';
      this.imgLink = '/assets/img/blank.png';
      return;
    } 

    if (this.link) {
      this.mdLink = `/data/portfolios/${this.link}/${this.link}.md`;
      this.imgLink = `/data/portfolios/${this.link}/desktop.jpg`;
      return;
    }  
  }

  ngOnDestroy() {
    this.dataLoad.unsubscribe();
  }

}

