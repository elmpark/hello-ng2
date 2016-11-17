import { NgModule }             from '@angular/core';
import {RouterModule} from "@angular/router";
import {AttrDirectiveComponent} from "./attr-directive.component";


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: AttrDirectiveComponent
    }
  ])],
  exports: [RouterModule]
})

export class AttrDirectiveRoutingModule {}
