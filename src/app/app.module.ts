import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { InMemoryDataService } from "./in-memory-data.service";

import './rxjs-extensions';
import { TohModule } from "./toh/toh.module";
import { AttrDirectiveModule } from "./attr-directive/attr-directive.module";
//import {TohRoutingModule} from "./toh/toh-routing.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MaterialModule.forRoot(),
    TohModule,
    AttrDirectiveModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
