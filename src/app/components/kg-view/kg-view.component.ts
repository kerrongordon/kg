import { Component, OnInit, AfterViewInit, AfterContentChecked, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { KgDataService } from '../../services/kg-data.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-kg-view',
  templateUrl: './kg-view.component.html',
  styleUrls: ['./kg-view.component.css'],
  providers: [KgDataService]
})
export class KgViewComponent implements OnInit, AfterViewInit, AfterContentChecked, OnDestroy {

  private title: string;
  private mdLink: string;
  private imgLink: string;
  private dataLoad: any;
  private url: string;
  public loaded = false;
  thispage = null;
  link = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private _KgDataService: KgDataService) {   }

  ngOnInit() {
    const page = this.route.snapshot.params['id'];
    this.dataLoad = this._KgDataService.getPortfolios().subscribe(data => {
      this.thispage = data.portfolios.filter(el => el.link === page);
      if (this.thispage.length === 0) { setTimeout(() => {this.router.navigate(['/home']); }, 500); return; };
      this.link = this.thispage['0'].link;
      this.title = this.thispage['0'].title;
      this.mdLink = `/data/portfolios/${this.link}/${this.link}.md`;
      this.imgLink = `/data/portfolios/${this.link}/desktop.jpg`;
      this.url = this.thispage['0'].url;
      const title = `${this.title} | Portfolio`;
      this.titleService.setTitle( title );
    });

  }

  ngAfterViewInit() {
    setTimeout(() => { document.getElementById('viewinfor').classList.add('is-active'); }, 100);
  }

  ngAfterContentChecked() {
    if (!this.link) { this.loaded = true; } else
    if (this.link.length) { setTimeout(() => { this.loaded = false; }, 500); return; }
  }

  openlink(link): void {
    window.open(link);
  }

  ngOnDestroy() {
    this.dataLoad.unsubscribe();
  }

}

