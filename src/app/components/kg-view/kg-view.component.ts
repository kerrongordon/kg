import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { KgDataService } from '../../services/kg-data.service';
import { KgSeoService } from '../../services/kg-seo.service';

@Component({
  selector: 'app-kg-view',
  templateUrl: './kg-view.component.html',
  styleUrls: ['./kg-view.component.css'],
  providers: [KgDataService, KgSeoService]
})

export class KgViewComponent implements OnInit, AfterViewInit {

  private Portfolios: Portfolio[];
  private title: string;
  private image: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seo: KgSeoService,
    private _KgDataService: KgDataService) { }

  ngOnInit() {

    const rountParams = this.route.snapshot.params['id'];
    const Portfolios$ = this._KgDataService.getPortfolios();

    Portfolios$.subscribe(
        data =>  {
          this.Portfolios = data.portfolios
            .filter(name => name.link === rountParams);

          this.title = this.Portfolios['0'].title;
          this.image = `${window.location.protocol}//${window.location.host}/data/portfolios/${this.Portfolios['0'].link}/desktop.jpg`;
          const title = `${this.title} | Portfolio`;

          this.seo.setTitle(title);
          this.seo.setMetaDescription(this.title);
          this.seo.setMetaImage(this.image);
          this.seo.setMetaUrl(window.location.href);
          this.seo.setOgType();
          this.seo.setTwitterCard();
          this.seo.setTwitterCreator();

          if (this.Portfolios.length === 0) {
            this.router.navigate(['/home']);
          };
        }
      );

   }

  ngAfterViewInit() {

    setTimeout(() => {
      document.getElementById('viewinfor')
        .classList.add('is-active');
    }, 100);

  }

  openlink(link): void {
    window.open(link);
  }

  goBackToPortfolio(): void {
    this.router.navigate(['/'], { fragment: 'portfolio' });
  }

  goBackToHome(): void {
    this.router.navigate(['/'], { fragment: 'home' });
  }

}

interface Portfolio {
  title: string;
  link: string;
  url: string;
}
