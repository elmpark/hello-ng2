import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttrDirectiveComponent } from './attr-directive.component';
import { AttrDirectiveRoutingModule } from "./attr-directive-routing.module";
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [
    CommonModule,
    AttrDirectiveRoutingModule
  ],
  declarations: [AttrDirectiveComponent, HighlightDirective]
})
export class AttrDirectiveModule { }
