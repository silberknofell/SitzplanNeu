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
var groups_service_1 = require("./../groups.service");
var group_edit_component_1 = require("./group-edit.component");
var plan_select_component_1 = require("./plan-select.component");
var plan_component_1 = require("./plan.component");
var plan_service_1 = require("../plan.service");
var GroupSelectComponent = (function () {
    function GroupSelectComponent(groupsService, planServie) {
        var _this = this;
        this.groupsService = groupsService;
        this.planServie = planServie;
        this.title = 'Gruppenauswahl';
        groupsService.getGruppen()
            .subscribe(function (gruppen) { _this.gruppen = gruppen; });
    }
    GroupSelectComponent.prototype.select = function (group) {
        this.selectedGroup = group;
    };
    GroupSelectComponent = __decorate([
        core_1.Component({
            selector: 'group-select',
            template: "\n    <h1>{{title}}</h1>\n        <ul>\n            <li *ngFor=\"#group of gruppen\"\n                   (click) = select(group)>\n                {{group.bezeichnung}}\n            </li>\n        </ul>\n        <group-edit \n            [gruppe]=\"selectedGroup\"\n        ></group-edit>\n        <plan-select\n             [gruppe]=\"selectedGroup\"\n        ></plan-select>\n        <plan></plan>\n  ",
            styles: ["\n\n  "],
            directives: [group_edit_component_1.GroupEditComponent, plan_select_component_1.PlanSelectComponent, plan_component_1.PlanComponent],
            providers: [groups_service_1.GroupsService, plan_service_1.PlanService]
        }), 
        __metadata('design:paramtypes', [groups_service_1.GroupsService, plan_service_1.PlanService])
    ], GroupSelectComponent);
    return GroupSelectComponent;
}());
exports.GroupSelectComponent = GroupSelectComponent;
//# sourceMappingURL=group-select.component.js.map