import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class KgPortfoliosService {

   private portfolios: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.portfolios = af.database.list('/portfolios');
  }

  getPortfolios() {
    return this.portfolios;
  }

}
