import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { KgDataService } from '../../services/kg-data.service';

@Component({
  selector: 'app-kg-view',
  templateUrl: './kg-view.component.html',
  styleUrls: ['./kg-view.component.css'],
  providers: [KgDataService]
})

export class KgViewComponent implements OnInit, AfterViewInit {

  private Portfolios: Portfolio[];
  private title: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private _KgDataService: KgDataService) { }

  ngOnInit() {

    const rountParams = this.route.snapshot.params['id'];
    const Portfolios$ = this._KgDataService.getPortfolios();

    Portfolios$.subscribe(
        data =>  {
          this.Portfolios = data.portfolios
            .filter(name => name.link === rountParams);

          this.title = this.Portfolios['0'].title;
          const title = `${this.title} | Portfolio`;
          this.titleService.setTitle( title );

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
