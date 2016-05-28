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
var sus_service_1 = require("../services/sus.service");
var sus_detail_component_1 = require("./sus-detail.component");
var SusEditComponent = (function () {
    function SusEditComponent(susService) {
        this.susService = susService;
        this._susList = [];
        this._gruppeId = 0;
    }
    Object.defineProperty(SusEditComponent.prototype, "gruppeId", {
        get: function () {
            return this._gruppeId;
        },
        set: function (value) {
            var _this = this;
            this._gruppeId = value;
            this.susService.getSusInGruppe(value)
                .subscribe(function (susList) {
                _this.susList = susList;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SusEditComponent.prototype, "susList", {
        get: function () {
            return this._susList;
        },
        set: function (value) {
            this._susList = value;
        },
        enumerable: true,
        configurable: true
    });
    SusEditComponent.prototype.select = function (sus) {
        this.selectedSus = sus;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SusEditComponent.prototype, "gruppeId", null);
    SusEditComponent = __decorate([
        core_1.Component({
            selector: 'sus-edit',
            template: "\n<ol>\n    <li *ngFor=\"let sus of susList\" \n        (click) = \"select(sus)\">\n\n        {{sus.getLongName()}}\n    </li>\n</ol>\n<p>  \n    <sus-detail\n        [sus] = \"selectedSus\"\n        [gruppeId] = \"gruppeId\"\n        ></sus-detail>\n</p>\n  ",
            styles: ["\n\n  "],
            directives: [sus_detail_component_1.SusDetailComponent],
            providers: [sus_service_1.SusService]
        }), 
        __metadata('design:paramtypes', [sus_service_1.SusService])
    ], SusEditComponent);
    return SusEditComponent;
}());
exports.SusEditComponent = SusEditComponent;
//# sourceMappingURL=sus-edit.component.js.map