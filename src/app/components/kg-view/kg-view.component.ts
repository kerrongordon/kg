import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KgDataService } from '../../services/kg-data.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-kg-view',
  templateUrl: './kg-view.component.html',
  styleUrls: ['./kg-view.component.css'],
  providers: [KgDataService]
})
export class KgViewComponent implements OnInit {

  private title: string;
  private mdLink: string;
  private imgLink: string;

  constructor(private route: ActivatedRoute, private _KgDataService: KgDataService) {   }

  ngOnInit() {
    setTimeout(() => {
      document.getElementById('viewinfor').classList.add('is-active');
    }, 100);

    const page = this.route.snapshot.params['id'];

    this.title = page;
    this.mdLink = `/data/portfolios/${page}/${page}.md`;
    this.imgLink = `/data/portfolios/${page}/desktop.jpg`;
  }

}

