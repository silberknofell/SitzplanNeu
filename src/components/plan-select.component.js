System.register(['angular2/core', "../plan.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, plan_service_1;
    var PlanSelectComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (plan_service_1_1) {
                plan_service_1 = plan_service_1_1;
            }],
        execute: function() {
            PlanSelectComponent = (function () {
                function PlanSelectComponent(planService) {
                    this.planService = planService;
                }
                PlanSelectComponent.prototype.beschreibungClick = function (description) {
                    var id = description.id;
                    this.planComponent.setPlan(this.planService.readPlan(id));
                };
                PlanSelectComponent.prototype.getPlaeneBeschreibung = function () {
                    return this.planService.getPlaeneBeschreibung();
                };
                PlanSelectComponent.prototype.getCssClass = function () {
                    var classes = "";
                    //TODO
                    // if (this.isMarkiert()) {
                    //     classes += " markiert";
                    // }
                    return classes;
                };
                PlanSelectComponent = __decorate([
                    core_1.Component({
                        selector: 'plan-select',
                        template: "<div id=\"plan-select\">\n<ul>\n    <li *ngFor=\"#description of getPlaeneBeschreibung()\"\n        [ngClass] = \"getCssClass()\"\n        (click)=\"beschreibungClick(description)\">\n        {{description.text}}\n    </li>\n</ul>\n</div>\n    ",
                        directives: [],
                        providers: [plan_service_1.PlanService],
                        inputs: ['planComponent']
                    }), 
                    __metadata('design:paramtypes', [plan_service_1.PlanService])
                ], PlanSelectComponent);
                return PlanSelectComponent;
            }());
            exports_1("PlanSelectComponent", PlanSelectComponent);
        }
    }
});
//# sourceMappingURL=plan-select.component.js.map