import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class KgDataService {

  private siteTitle: string;
  private siteEmail: string;

  constructor(private http: Http) { }

  getSiteTitle() {
    return this.siteTitle = 'Kerron Gordon';
  }

  getSiteEmail() {
    return this.siteEmail = 'kgpsounds.com@gmail.com';
  }

  getSiteDescription() {
    return this.http.get('./data/description/description.json')
      .map((res: Response) => res.json());
  }

  getSiteSkills() {
    return this.http.get('./data/skills/skills.json')
      .map((res: Response) => res.json());
  }

  getPortfolios() {
    return this.http.get('./data/portfolios/portfolios.json')
      .map((res: Response) => res.json());
  }

  postEmail(data) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://formspree.io/kgpsounds.com@gmail.com', data, headers)
      .map((res: Response) => res.json());
  }

}
