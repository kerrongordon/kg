import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MarkdownToHtmlPipe } from 'markdown-to-html-pipe';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { KgHeroComponent } from './components/kg-hero/kg-hero.component';
import { KgAvatarComponent } from './components/kg-avatar/kg-avatar.component';
import { KgAboutComponent } from './components/kg-about/kg-about.component';
import { KgSkillComponent } from './components/kg-skill/kg-skill.component';
import { KgPortfolioComponent } from './components/kg-portfolio/kg-portfolio.component';
import { KgCardComponent } from './components/kg-card/kg-card.component';
import { RouteRoutingModule, routingComponents } from './route/route-routing.module';
import { KgFooterComponent } from './components/kg-footer/kg-footer.component';
import { KgContactComponent } from './components/kg-contact/kg-contact.component';
import { KgEditComponent } from './components/kg-edit/kg-edit.component';
import { firebaseConfig } from './services/firebase';




@NgModule({
  declarations: [
    AppComponent,
    KgHeroComponent,
    KgAvatarComponent,
    KgAboutComponent,
    KgSkillComponent,
    KgPortfolioComponent,
    KgCardComponent,
    routingComponents,
    KgFooterComponent,
    KgContactComponent,
    KgEditComponent,
    MarkdownToHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouteRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
