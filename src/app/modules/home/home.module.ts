import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './container/home/home.component';
import { HomeOverviewComponent } from './components/home-overview/home-overview.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeOverviewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
