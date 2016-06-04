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
var core_1 = require("@angular/core");
var plan_service_1 = require("../services/plan.service");
var PlanInout = (function () {
    function PlanInout(planservice) {
        this.planService = planservice;
    }
    PlanInout.prototype.copyClick = function () {
    };
    PlanInout.prototype.importClick = function () {
        var planVorlage = JSON.parse(this.austausch);
    };
    PlanInout.prototype.exportClick = function () {
        this.austausch = this.plan.getJSON();
    };
    PlanInout = __decorate([
        core_1.Component({
            selector: 'plan-inout',
            template: "<div>\n            <textarea [(ngModel)]=\"austausch\"></textarea>\n            <button (click)=\"importClick()\">Import</button>\n            <button (click)=\"exportClick()\">Export</button>\n            <button (click)=\"saveClick()\">Speichern</button>\n            <button (click)=\"copyClick()\">PlanCopy</button>\n        </div>\n    ",
            directives: [],
            providers: [],
            inputs: ['planComponent', 'plan']
        }), 
        __metadata('design:paramtypes', [plan_service_1.PlanService])
    ], PlanInout);
    return PlanInout;
}());
exports.PlanInout = PlanInout;
//# sourceMappingURL=plan-inout.component.js.map