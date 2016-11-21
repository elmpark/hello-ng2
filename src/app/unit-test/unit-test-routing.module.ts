
import {NgModule} from "@angular/core";
import {UnitTestComponent} from "./unit-test.component";
import {RouterModule} from "@angular/router";
@NgModule({
  imports: [RouterModule.forChild(
    [{
      path: '',
      component: UnitTestComponent
    }]
  )]
})

export class UnitTestRoutingModule {}
