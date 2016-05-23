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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
require('rxjs/Rx');
var group_select_container_component_1 = require("./container/group-select-container.component");
var plan_container_1 = require("./container/plan-container");
var group_edit_container_1 = require("./container/group-edit-container");
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/group-select']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <nav>        \n        <a [routerLink]=\"['/group-select']\">Gruppenauswahl</a>\n        <a [routerLink]=\"['/plan/2']\">Plan</a>\n        <a [routerLink]=\"['/gruppe/2']\">Gruppe editieren</a>\n        </nav>\n        <router-outlet></router-outlet>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES],
        }),
        router_1.Routes([
            { path: '/plan/:group_id', component: plan_container_1.PlanContainer },
            { path: '/gruppe/:id', component: group_edit_container_1.GroupEditContainer },
            { path: '/group-select', component: group_select_container_component_1.GroupSelectContainer }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map