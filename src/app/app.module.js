"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var material_1 = require('@angular/material');
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var app_component_1 = require('./app.component');
var hero_service_1 = require("./hero.service");
var heroes_component_1 = require('./heroes/heroes.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var hero_detail_component_1 = require('./hero-detail/hero-detail.component');
var app_routing_module_1 = require("./app-routing.module");
var in_memory_data_service_1 = require("./in-memory-data.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                heroes_component_1.HeroesComponent,
                dashboard_component_1.DashboardComponent,
                hero_detail_component_1.HeroDetailComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                material_1.MaterialModule.forRoot(),
                app_routing_module_1.AppRoutingModule
            ],
            providers: [hero_service_1.HeroService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
