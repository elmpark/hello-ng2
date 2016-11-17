import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'toh', pathMatch: 'full' },
  {
    path: 'attr-directive',
    loadChildren: 'app/attr-directive/attr-directive.module#AttrDirectiveModule'
  }

  // {path: 'dashboard', component: DashboardComponent},
  // {path: 'detail/:id', component: HeroDetailComponent},
  // {path: 'heroes', component: HeroesComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
