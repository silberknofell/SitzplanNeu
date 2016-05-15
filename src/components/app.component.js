"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var group_select_component_1 = require("./group-select.component");
var plan_component_1 = require("./plan.component");
require('rxjs/Rx');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Sitzplan-Manager';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <nav>\n        <a [routerLink]=\"['Gruppe']\">Gruppe</a>\n        <a [routerLink]=\"['Plan']\">Plan</a>\n        </nav>\n        <router-outlet></router-outlet>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES, plan_component_1.PlanComponent],
        }),
        router_1.RouteConfig([
            { path: '/gruppeBezeichnung', name: 'Gruppe', component: group_select_component_1.GroupSelectComponent },
            { path: '/plan', name: 'Plan', component: plan_component_1.PlanComponent },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map