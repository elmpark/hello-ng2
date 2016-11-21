import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitTestComponent } from './unit-test.component';
import {UnitTestRoutingModule} from "./unit-test-routing.module";

@NgModule({
  imports: [
    CommonModule,
    UnitTestRoutingModule
  ],
  declarations: [UnitTestComponent]
})
export class UnitTestModule { }
