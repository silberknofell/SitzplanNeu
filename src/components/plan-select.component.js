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
var plan_component_1 = require("./plan.component");
var plan_service_1 = require("../plan.service");
var gruppe_1 = require("../Pojo/gruppe");
var PlanSelectComponent = (function () {
    function PlanSelectComponent(planService) {
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
    PlanSelectComponent.prototype.beschreibungClick = function (description) {
        var id = description.id;
        this.planComponent.setPlan(this.planService.readPlan(id));
    };
    PlanSelectComponent.prototype.getPlaeneBeschreibung = function () {
        var _this = this;
        if (this._gruppe) {
            this.planService.getPlaeneBeschreibung(this._gruppe.id)
                .subscribe(function (b) { return _this.plaeneBeschreibungen = b; });
        }
    };
    PlanSelectComponent.prototype.getCssClass = function () {
        var classes = "";
        return classes;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', plan_component_1.PlanComponent)
    ], PlanSelectComponent.prototype, "planComponent", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', gruppe_1.Gruppe)
    ], PlanSelectComponent.prototype, "gruppe", null);
    PlanSelectComponent = __decorate([
        core_1.Component({
            selector: 'plan-select',
            template: "<div id=\"plan-select\">\n<h1>PlanSelect</h1>\n<ul>\n    <li *ngFor=\"#description of plaeneBeschreibungen\"\n        [ngClass] = \"getCssClass()\"\n        (click)=\"beschreibungClick(description)\">\n        {{description.text}}\n    </li>\n</ul>\n</div>\n<plan\n\n></plan>\n    ",
            directives: [],
            providers: [plan_service_1.PlanService]
        }), 
        __metadata('design:paramtypes', [plan_service_1.PlanService])
    ], PlanSelectComponent);
    return PlanSelectComponent;
}());
exports.PlanSelectComponent = PlanSelectComponent;
//# sourceMappingURL=plan-select.component.js.map