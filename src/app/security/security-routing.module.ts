import { NgModule }             from '@angular/core';
import {RouterModule} from "@angular/router";
import { SecurityComponent } from './security.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: SecurityComponent
    }
  ])],
  exports: [RouterModule]
})

export class SecurityRoutingModule {}
