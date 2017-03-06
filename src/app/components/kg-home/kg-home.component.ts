import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KgSeoService } from '../../services/kg-seo.service';

@Component({
  selector: 'app-kg-home',
  templateUrl: './kg-home.component.html',
  styleUrls: ['./kg-home.component.css'],
  providers: [KgSeoService]
})
export class KgHomeComponent implements OnInit {

  private title = 'Kerron Gordon';

  constructor(private route: ActivatedRoute, private seo: KgSeoService) {
   }

  ngOnInit() {
    const page = this.route.fragment['_value'];

    setTimeout(() => {
      document.getElementById('home').classList.add('is-active');
      if (page) { window.location.href = `#${page}`; }
      return;
    }, 100);

    this.setSeo();

  }

  setSeo() {
    this.seo.setTitle('Kerron Gordon');
    this.seo.setMetaDescription('Kerron specializes in making exceptional websites');
    this.seo.setMetaImage('https://kerrongordon-8f9c4.firebaseapp.com/assets/img/hero.jpg');
    this.seo.setMetaUrl(window.location.href);
    this.seo.setOgType();
    this.seo.setTwitterCard();
    this.seo.setTwitterCreator();
  }

}
