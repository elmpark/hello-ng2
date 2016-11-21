import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectiveComponent } from './structural-directive.component';
import {StructuralDirectiveRoutingModule} from "./structural-directive-routing.module";
import { HeavyLoaderComponent } from './heavy-loader/heavy-loader.component';

@NgModule({
  imports: [
    CommonModule,
    StructuralDirectiveRoutingModule
  ],
  declarations: [StructuralDirectiveComponent, HeavyLoaderComponent]
})
export class StructuralDirectiveModule { }
