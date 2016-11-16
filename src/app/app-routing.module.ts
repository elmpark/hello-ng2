import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'toh', pathMatch: 'full'},
  { path: 'toh', loadChildren: 'toh/toh.module#TohModule'}
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
