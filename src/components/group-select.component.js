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
var groups_service_1 = require("../services/groups.service");
var router_1 = require('@angular/router');
var GroupSelectComponent = (function () {
    function GroupSelectComponent(groupsService, router) {
        var _this = this;
        this.groupsService = groupsService;
        this.router = router;
        groupsService.getGruppen()
            .subscribe(function (gruppen) { _this.gruppen = gruppen; });
    }
    GroupSelectComponent.prototype.select = function (group) {
        this.router.navigate(['/plaene', group.id]);
    };
    GroupSelectComponent = __decorate([
        core_1.Component({
            selector: 'group-select',
            template: "\n        <div class=\"btn-toolbar\">\n            <span *ngFor=\"let group of gruppen\"\n                class=\"btn btn-success\"\n                (click) = \"select(group)\">\n                {{group.bezeichnung}}\n            </span>\n        </div>\n  ",
            styles: ["\n\n  "],
            directives: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [groups_service_1.GroupsService, router_1.Router])
    ], GroupSelectComponent);
    return GroupSelectComponent;
}());
exports.GroupSelectComponent = GroupSelectComponent;
//# sourceMappingURL=group-select.component.js.map