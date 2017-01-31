import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteRoutingModule } from './route-routing.module';
import { RouteComponent } from './route.component';

@NgModule({
  imports: [
    CommonModule,
    RouteRoutingModule
  ],
  declarations: [RouteComponent]
})
export class RouteModule { }
