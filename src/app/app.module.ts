import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { RouteRoutingModule, routingComponents } from './route/route-routing.module';
import { AppComponent } from './app.component';
import { KgHeroComponent } from './components/kg-hero/kg-hero.component';
import { KgAvatarComponent } from './components/kg-avatar/kg-avatar.component';
import { KgAboutComponent } from './components/kg-about/kg-about.component';
import { KgSkillComponent } from './components/kg-skill/kg-skill.component';
import { KgPortfolioComponent } from './components/kg-portfolio/kg-portfolio.component';
import { KgCardComponent } from './components/kg-card/kg-card.component';
import { KgFooterComponent } from './components/kg-footer/kg-footer.component';
import { KgContactComponent } from './components/kg-contact/kg-contact.component';
import { KgNotifyComponent } from './components/kg-notify/kg-notify.component';
import { NotifyDirective } from './directives/notify.directive';


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
    KgNotifyComponent,
    NotifyDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouteRoutingModule,
    MarkdownToHtmlModule.forRoot()
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
