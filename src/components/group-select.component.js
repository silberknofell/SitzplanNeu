System.register(['angular2/core', "./../groups.service"], function(exports_1, context_1) {
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
    var core_1, groups_service_1;
    var GroupSelectComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (groups_service_1_1) {
                groups_service_1 = groups_service_1_1;
            }],
        execute: function() {
            GroupSelectComponent = (function () {
                function GroupSelectComponent(_groupsService) {
                    this._groupsService = _groupsService;
                    this.title = 'Gruppenauswahl';
                    this.gruppen = _groupsService.getGroups();
                }
                GroupSelectComponent = __decorate([
                    core_1.Component({
                        selector: 'group-select',
                        template: "\n    <h1>{{title}}</h1>\n        <ul>\n            <li *ngFor=\"#group of gruppen\">\n                {{group.bezeichnung}}\n            </li>\n        </ul>\n  ",
                        styles: ["\n\n  "],
                        directives: [],
                        providers: [groups_service_1.GroupsService]
                    }), 
                    __metadata('design:paramtypes', [groups_service_1.GroupsService])
                ], GroupSelectComponent);
                return GroupSelectComponent;
            }());
            exports_1("GroupSelectComponent", GroupSelectComponent);
        }
    }
});
//# sourceMappingURL=group-select.component.js.map