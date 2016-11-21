import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'toh', pathMatch: 'full' },
  {
    path: 'attr-directive',
    loadChildren: 'app/attr-directive/attr-directive.module#AttrDirectiveModule'
  },
  {
    path: 'security',
    loadChildren: 'app/security/security.module#SecurityModule'
  },
  {
    path: 'unit-test',
    loadChildren: 'app/unit-test/unit-test.module#UnitTestModule'
  },
  {
    path: 'structural-directive',
    loadChildren: 'app/structural-directive/structural-directive.module#StructuralDirectiveModule'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
