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
var sus_service_1 = require("../services/sus.service");
var sus_edit_component_1 = require("./sus-edit.component");
var SusSelectComponent = (function () {
    function SusSelectComponent() {
        this._susList = [];
    }
    Object.defineProperty(SusSelectComponent.prototype, "susList", {
        get: function () {
            return this._susList;
        },
        set: function (value) {
            this._susList = value;
        },
        enumerable: true,
        configurable: true
    });
    SusSelectComponent.prototype.select = function (sus) {
        this.selectedSus = sus;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SusSelectComponent.prototype, "gruppe_id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SusSelectComponent.prototype, "susList", null);
    SusSelectComponent = __decorate([
        core_1.Component({
            selector: 'sus-select',
            template: "\n<ul>\n    <li *ngFor=\"#sus of susList\" \n        (click) = \"select(sus)\">\n\n        {{sus.getLongName()}}\n    </li>\n</ul>\n<p>  \n    <edit-sus \n        [sus] = \"selectedSus\"\n        [gruppe_id] = \"gruppe_id\"\n        ></edit-sus>\n</p>\n  ",
            styles: ["\n\n  "],
            directives: [sus_edit_component_1.EditSusComponent],
            providers: [sus_service_1.SusService]
        }), 
        __metadata('design:paramtypes', [])
    ], SusSelectComponent);
    return SusSelectComponent;
}());
exports.SusSelectComponent = SusSelectComponent;
//# sourceMappingURL=sus-select.component.js.map