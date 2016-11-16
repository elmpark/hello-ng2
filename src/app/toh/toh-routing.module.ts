import { NgModule }             from '@angular/core';
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {HeroesComponent} from "./heroes/heroes.component";

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes',     component: HeroesComponent }
  ])],
  exports: [RouterModule]
})

export class TohRoutingModule {}
