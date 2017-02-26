import { Component, OnInit, OnDestroy, AfterContentChecked } from '@angular/core';
import { KgDataService } from '../../services/kg-data.service';

@Component({
  selector: 'app-kg-skill',
  templateUrl: './kg-skill.component.html',
  styleUrls: ['./kg-skill.component.css'],
  providers: [KgDataService]
})
export class KgSkillComponent implements OnInit, OnDestroy, AfterContentChecked {

  private skills: Skill;
  private dataLoad: any;

  constructor(private _kgDataService: KgDataService) { }

  ngOnInit() {
    this.dataLoad = this._kgDataService.getSiteSkills().subscribe(data => this.skills = data);
  }

  ngAfterContentChecked() {  }

  ngOnDestroy() {
    this.dataLoad.unsubscribe();
  }

}

interface Skill {
  title: string;
  level: string;
}
