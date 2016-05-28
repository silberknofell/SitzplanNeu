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
var plan_component_1 = require("./plan.component");
var plan_service_1 = require("../services/plan.service");
var gruppe_1 = require("../Pojo/gruppe");
var plan_inout_component_1 = require("./plan-inout.component");
var sus_service_1 = require("../services/sus.service");
var PlanSelectComponent = (function () {
    function PlanSelectComponent(planService, susService) {
        this.planService = planService;
        this.susService = susService;
        this.plaeneBeschreibungen = [];
        this.planService = planService;
    }
    Object.defineProperty(PlanSelectComponent.prototype, "gruppe", {
        get: function () {
            return this._gruppe;
        },
        set: function (value) {
            this._gruppe = value;
            this.getPlaeneBeschreibung();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlanSelectComponent.prototype, "selectedDescription", {
        get: function () {
            if (this.plaeneBeschreibungen.length > 0) {
                return this.plaeneBeschreibungen[0];
            }
            return null;
        },
        set: function (value) {
            var _this = this;
            this.planService.readPlan(value.id)
                .subscribe(function (plan) { return _this._plan = plan; });
        },
        enumerable: true,
        configurable: true
    });
    PlanSelectComponent.prototype.newClick = function () {
        var _this = this;
        this.susService.getSusInGruppe(this.gruppe.id)
            .subscribe(function (sus) { return _this.newPlan(sus); });
    };
    PlanSelectComponent.prototype.newPlan = function (sus) {
        this._plan = this.planService.getNewPlan(sus);
        this._plan.nr = this.getMaxPlanNr() + 1;
        this._plan.gruppe = this._gruppe;
    };
    PlanSelectComponent.prototype.getMaxPlanNr = function () {
        var nummern = this.plaeneBeschreibungen
            .map(function (plan) { return plan.nr; });
        if (nummern.length > 0) {
            return Math.max.apply(null, nummern);
        }
        return 1;
    };
    PlanSelectComponent.prototype.getPlaeneBeschreibung = function () {
        var _this = this;
        if (this._gruppe) {
            this.planService.getPlaeneBeschreibung(this._gruppe.id)
                .subscribe(function (b) {
                _this.plaeneBeschreibungen = b;
            });
        }
    };
    PlanSelectComponent.prototype.getCssClass = function () {
        var classes = "";
        return classes;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', gruppe_1.Gruppe)
    ], PlanSelectComponent.prototype, "gruppe", null);
    PlanSelectComponent = __decorate([
        core_1.Component({
            selector: 'plan-select',
            template: "<div id=\"plan-select\">\n<select [(ngModel)] = \"selectedDescription\">\n    <option *ngFor = \"let description of plaeneBeschreibungen\"\n            [ngValue] = \"description\"\n            >\n    {{description.text}}\n    </option>\n</select>\n\n<plan [plan]=\"_plan\"></plan>\n</div>\n<div>\n    <plan-inout [plan] = \"_plan\"></plan-inout>\n</div>\n<button (click)=\"newClick()\">Neuer Plan</button>\n    ",
            styles: ["\n        select {\n            font-size: 30px;\n        }\n    "],
            directives: [plan_component_1.PlanComponent, plan_inout_component_1.PlanInout],
            providers: [plan_service_1.PlanService, sus_service_1.SusService]
        }), 
        __metadata('design:paramtypes', [plan_service_1.PlanService, sus_service_1.SusService])
    ], PlanSelectComponent);
    return PlanSelectComponent;
}());
exports.PlanSelectComponent = PlanSelectComponent;
//# sourceMappingURL=plan-select.component.js.map