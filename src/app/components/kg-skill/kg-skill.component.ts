import { Component, OnInit } from '@angular/core';
import { KgDataService } from '../../services/kg-data.service';

@Component({
  selector: 'app-kg-skill',
  templateUrl: './kg-skill.component.html',
  styleUrls: ['./kg-skill.component.css'],
  providers: [KgDataService]
})
export class KgSkillComponent implements OnInit {

  private skills: Skill;

  constructor(private _kgDataService: KgDataService) { }

  ngOnInit() {
    return this._kgDataService.getSiteSkills().subscribe(data => this.skills = data);
  }

}

interface Skill {
  title: string;
  level: string;
}
