import { Injectable } from '@angular/core';

@Injectable()
export class KgDataService {

  private siteTitle: string;
  private siteEmail: string;
  private siteDescription: string;
  private siteSkills: any[];

  constructor() { }

  getSiteTitle() {
    return this.siteTitle = 'Kerron Gordon';
  }

  getSiteEmail() {
    return this.siteEmail = 'kgpsounds.com@gmail.com';
  }

  getSiteDescription() {
    return this.siteDescription = `Write an awesome description for your new site here. 
                                   You can edit this line in _config.yml. 
                                   It will appear in your document head meta (for Google search results) 
                                   and in your feed.xml site description.`;
  }

  getSiteSkills() {
    return this.siteSkills = [
      { title: 'Communication', level: '70'},
      { title: 'Organization', level: '80'},
      { title: 'Learning', level: '75'},
      { title: 'Teaching', level: '65'},
      { title: 'Planning', level: '75'},
      { title: 'Visual Design', level: '50'},
      { title: 'UX Design', level: '80'},
      { title: 'Programming', level: '67'}
    ];
  }

}
