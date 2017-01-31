import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kg-skill',
  templateUrl: './kg-skill.component.html',
  styleUrls: ['./kg-skill.component.css']
})
export class KgSkillComponent implements OnInit {

  private skills: any[];

  constructor() { }

  ngOnInit() {

    this.skills = [
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
