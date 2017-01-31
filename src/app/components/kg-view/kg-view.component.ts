import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KgPortfoliosService } from '../../services/kg-portfolios.service';

@Component({
  selector: 'app-kg-view',
  templateUrl: './kg-view.component.html',
  styleUrls: ['./kg-view.component.css'],
  providers: [KgPortfoliosService]
})
export class KgViewComponent implements OnInit {

  title: string;
  content: string;
  imgUrl: string;

  constructor(
    private route: ActivatedRoute,
    private _kgPortfoliosService: KgPortfoliosService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      document.getElementById('viewinfor').classList.add('is-active');
    }, 100);

    const id = this.route.snapshot.params['id'];
    const portfolios = this._kgPortfoliosService.getPortfolios();

    const getId = portfolios.filter((portfolio) => {
      return portfolio.id === id;
    });

    this.title = getId[0].title;
    this.content = getId[0].content;
    this.imgUrl = getId[0].imgUrl;

  }

}

