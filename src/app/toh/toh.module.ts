import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TohComponent } from './toh.component';
import {HeroesComponent} from "./heroes/heroes.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {HeroSearchComponent} from "./hero-search/hero-search.component";
import {HeroService} from "./hero.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TohComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  exports: [
    TohComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    DashboardComponent
  ],
  providers: [HeroService]
})
export class TohModule { }
