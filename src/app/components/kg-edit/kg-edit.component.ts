import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { KgPortfoliosService } from '../../services/kg-portfolios.service';

@Component({
  selector: 'app-kg-edit',
  templateUrl: './kg-edit.component.html',
  styleUrls: ['./kg-edit.component.css'],
  providers: [KgPortfoliosService]
})
export class KgEditComponent implements OnInit {

  markedit: any;
  content: string;
  markedOutPut: any;
  title: any;
  thumbnail: any;
  cardimg: any;

  private portfolios: FirebaseListObservable<any>;

  constructor(private _kgPortfoliosService: KgPortfoliosService, private af: AngularFire) {
    this.portfolios = af.database.list('/portfolios');
  }

  ngOnInit() {

  }

  getContent() {
    const cont = document.getElementById('output');
    this.markedOutPut = cont.innerHTML;
    this.title = cont.firstChild.textContent;
  }

  addNew() {
    if (!this.markedOutPut && !this.title && !this.thumbnail && !this.cardimg) {
      return console.log('there in no content');
    }

    const cont = document.getElementById('output');
    this.thumbnail = cont.querySelector('img[alt="thumbnail"]').getAttribute('src');
    this.cardimg = cont.querySelector('img[alt="cardimg"]').getAttribute('src');

    this.portfolios.push({
      title: this.title,
      content: this.markedOutPut,
      thumbnail: this.thumbnail,
      cardimg: this.cardimg
    });

    this.markedit = null;
    this.markedOutPut = null;

    console.log(this.portfolios);
  }

}
