import {RouterModule} from "@angular/router";
import {PipesDemoComponent} from "./pipes-demo.component";
import {NgModule} from "@angular/core";

@NgModule({
  imports: [RouterModule.forChild([
      {
        path: '',
        component: PipesDemoComponent
      }
    ]
  )
  ],
  exports: [RouterModule]
})

export class PipesDemoRoutingModule {
}
