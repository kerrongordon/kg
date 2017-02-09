import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KgPortfoliosService } from '../../services/kg-portfolios.service';

@Component({
  selector: 'app-kg-view',
  templateUrl: './kg-view.component.html',
  styleUrls: ['./kg-view.component.css'],
  providers: [KgPortfoliosService]
})
export class KgViewComponent implements OnInit {

  private title: string;
  private content: any;
  private imgUrl: string;
  private thumb: string;

  constructor(
    private route: ActivatedRoute,
    private _kgPortfoliosService: KgPortfoliosService
  ) {   }

  ngOnInit() {
    setTimeout(() => {
      document.getElementById('viewinfor').classList.add('is-active');
    }, 100);

    const id = this.route.snapshot.params['id'];

    return this._kgPortfoliosService.getPortfolios().subscribe(
      (data) => {

        const getId = data.filter((portfolio) => {
          return portfolio.$key === id;
        });

        this.title = getId[0].title;
        this.content = getId[0].content;
        this.imgUrl = getId[0].thumbnail;
        this.thumb = getId[0].cardimg;

    });

  }

}

