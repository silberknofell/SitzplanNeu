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
var sus_service_1 = require("../services/sus.service");
var gruppe_1 = require("../Pojo/gruppe");
var sus_select_component_1 = require("./sus-select.component");
var GroupEditComponent = (function () {
    function GroupEditComponent(susService) {
        this.susService = susService;
        this.title = 'Gruppenauswahl';
        this.susService = susService;
    }
    Object.defineProperty(GroupEditComponent.prototype, "gruppe", {
        get: function () {
            return this._gruppe;
        },
        set: function (gruppe) {
            var _this = this;
            this._gruppe = gruppe;
            if (gruppe) {
                this.susService.getSusInGruppe(this._gruppe.id)
                    .subscribe(function (susList) {
                    _this._susList = susList;
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    GroupEditComponent.prototype.gruppeID = function () {
        if (this._gruppe) {
            return this._gruppe.id;
        }
        return 0;
    };
    GroupEditComponent.prototype.getSusList = function () {
        return this._susList;
    };
    GroupEditComponent.prototype.getTitle = function () {
        if (this.gruppe) {
            return this.gruppe.bezeichnung;
        }
        return "leer";
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', gruppe_1.Gruppe), 
        __metadata('design:paramtypes', [gruppe_1.Gruppe])
    ], GroupEditComponent.prototype, "gruppe", null);
    GroupEditComponent = __decorate([
        core_1.Component({
            selector: 'group-edit',
            template: "<h1>{{getTitle()}}</h1>\n                <sus-select\n                    [susList] = getSusList()\n                    [gruppe_id] = gruppeID()>\n                 </sus-select>\n",
            styles: ["\n"], directives: [sus_select_component_1.SusSelectComponent],
            providers: [sus_service_1.SusService]
        }), 
        __metadata('design:paramtypes', [sus_service_1.SusService])
    ], GroupEditComponent);
    return GroupEditComponent;
}());
exports.GroupEditComponent = GroupEditComponent;
//# sourceMappingURL=group-edit.component.js.map