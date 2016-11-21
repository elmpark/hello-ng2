
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {StructuralDirectiveComponent} from "./structural-directive.component";
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: StructuralDirectiveComponent
      }
    ])
  ]
})

export class StructuralDirectiveRoutingModule {}
