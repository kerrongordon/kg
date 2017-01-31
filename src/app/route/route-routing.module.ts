import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KgViewComponent } from '../components/kg-view/kg-view.component';
import { KgHomeComponent } from '../components/kg-home/kg-home.component';

const routes: Routes = [
  {path: '', component: KgHomeComponent },
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'portfolio/:id', component: KgViewComponent},
  { path: '**', component: KgHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RouteRoutingModule { }

export const routingComponents = [KgViewComponent, KgHomeComponent];
