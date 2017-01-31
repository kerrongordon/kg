import { Injectable } from '@angular/core';

@Injectable()
export class KgPortfoliosService {

  public portfolios: any[];

  constructor() { }

  getPortfolios(id?) {
    this.portfolios = [
      {
        id: '1',
        imgUrl: './assets/img/Probatus.png',
        url: '#',
        title: 'This is a card',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.'
      },
      {
        id: '2',
        imgUrl: './assets/img/thumbnail.png',
        url: '#',
        title: 'This is a card',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.'
      },
      {
        id: '3',
        imgUrl: './assets/img/hero.jpg',
        url: '#',
        title: 'This is a card',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.'
      },
      {
        id: '4',
        imgUrl: './assets/img/hero.jpg',
        url: '#',
        title: 'This is a card',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.'
      },
      {
        id: '5',
        imgUrl: './assets/img/hero.jpg',
        url: '#',
        title: 'This is a card',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.'
      },
      {
        id: '6',
        imgUrl: './assets/img/hero.jpg',
        url: '#',
        title: 'This is a card',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.'
      }
    ];
    return this.portfolios;
  }

}
