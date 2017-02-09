import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KgViewComponent } from '../components/kg-view/kg-view.component';
import { KgHomeComponent } from '../components/kg-home/kg-home.component';
import { KgEditComponent } from '../components/kg-edit/kg-edit.component';
import { KgLoginComponent } from '../components/kg-login/kg-login.component';
import { KgUserService } from '../services/kg-user.service';
// import { LoggedInGuard } from '../logged-in.guard';

const routes: Routes = [
  {path: '', component: KgHomeComponent },
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'portfolio/:id', component: KgViewComponent},
  {path: 'add', component: KgEditComponent},
  {path: 'login', component: KgLoginComponent},
  {path: '**', component: KgHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [KgUserService]
})
export class RouteRoutingModule { }

export const routingComponents = [
  KgViewComponent,
  KgHomeComponent,
  KgEditComponent,
  KgLoginComponent
];
