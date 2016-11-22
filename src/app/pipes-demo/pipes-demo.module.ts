import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesDemoComponent } from './pipes-demo.component';
import {PipesDemoRoutingModule} from "./pipes-demo-routing.module";
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import {FormsModule} from "@angular/forms";
import { FlyingHeroesPipe } from './flying-heroes.pipe';

@NgModule({
  imports: [
    CommonModule,
    PipesDemoRoutingModule,
    FormsModule
  ],
  declarations: [PipesDemoComponent, ExponentialStrengthPipe, FlyingHeroesPipe]
})
export class PipesDemoModule { }
