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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private _KgDataService: KgDataService) {

      const rountParams = route.snapshot.params['id'];
      const Portfolios$ = _KgDataService.getPortfolios();

      Portfolios$.subscribe(
        data =>  {
          this.Portfolios = data.portfolios
            .filter(name => name.link === rountParams);

          if (this.Portfolios.length === 0) {
            this.router.navigate(['/home']);
          };
        }
      );

     }

  ngOnInit() {  }

  ngAfterViewInit() {

    setTimeout(() => {
      document.getElementById('viewinfor')
        .classList.add('is-active');
    }, 100);

  }

  openlink(link): void {
    window.open(link);
  }

}

interface Portfolio {
  title: string;
  link: string;
  url: string;
}
