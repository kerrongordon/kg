import { Component, OnInit, OnDestroy } from '@angular/core';
import { KgDataService } from '../../services/kg-data.service';

@Component({
  selector: 'app-kg-skill',
  templateUrl: './kg-skill.component.html',
  styleUrls: ['./kg-skill.component.css'],
  providers: [KgDataService]
})
export class KgSkillComponent implements OnInit, OnDestroy {

  private skills: any[];
  private dataLoad: any;

  constructor(private _kgDataService: KgDataService) { }

  ngOnInit() {
    this.dataLoad = this._kgDataService.getSiteSkills().subscribe(data => this.skills = data);
  }

  ngOnDestroy() {
    this.dataLoad.unsubscribe();
  }

}
