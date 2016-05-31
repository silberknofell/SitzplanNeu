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
var sus_1 = require("../Pojo/sus");
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
                _this.susList = susList.map(function (s) { return new sus_1.SusWrap(s); });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SusEditComponent.prototype, "susList", {
        get: function () {
            console.log(this._susList);
            return this._susList;
        },
        set: function (susList) {
            this._susList = susList;
            if (susList.length > 0) {
                this.selectedSus = susList[0];
            }
        },
        enumerable: true,
        configurable: true
    });
    SusEditComponent.prototype.onKeyUp = function () {
        this.sort();
    };
    SusEditComponent.prototype.sort = function () {
        this._susList.sort(function (sus1, sus2) { return sus1.nachname.localeCompare(sus2.nachname); });
    };
    SusEditComponent.prototype.select = function (sus) {
        this.selectedSus = sus;
        this.sort();
    };
    SusEditComponent.prototype.neu = function () {
        var sus = sus_1.SusWrap.leererSusWrap(this._gruppeId);
        this.selectedSus = sus;
        this.susList.push(sus);
        this.sort();
    };
    SusEditComponent.prototype.deleteSus = function () {
        this.selectedSus.deleteThis();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SusEditComponent.prototype, "gruppeId", null);
    SusEditComponent = __decorate([
        core_1.Component({
            selector: 'sus-edit',
            template: "<div class=\"col-xs-3\">\n    <ol class=\"list-group\">\n    <template ngFor let-sus [ngForOf]=\"susList\">\n    <li *ngIf=\"!sus.isDeleted()\"\n        class=\"list-group-item list-group-item-info\"  \n        [class.active]=\"sus === selectedSus\"\n        [class.changed]=\"sus.isChanged()\"\n        (click)=\"select(sus)\">\n            {{sus.getLongName()}}\n        </li>    \n    \n    </template>\n\n\n    </ol>\n</div>\n<div class=\"col-xs-5\">\n\n    <p>\n        <sus-detail\n                [sus]=\"selectedSus\"\n                [gruppeId]=\"gruppeId\"\n                (onKeyUp) = onKeyUp($event)\n        ></sus-detail>\n    </p>\n    <div>\n        <button id=\"btnNeu\" class=\"btn btn-success\" (click)=\"neu()\">Neue(r) Sch\u00FCler(in)</button>\n        <button id=\"btnDelete\" class=\"btn btn-danger\" (click)=\"deleteSus()\">L\u00F6schen</button>\n    </div>\n</div>\n  ",
            styles: ["\n        li:hover { background-color:#7CCFF8; } \n        .list-group {  list-style: decimal-leading-zero inside; }\n        .list-group-item { display: list-item;}\n        li { padding-top: 3px; padding-bottom: 3px }  \n        li.changed {background-color:#ff8080; }\n        #btnNeu {width: 70%}\n        #btnDelete {width: 25%}\n  "],
            directives: [sus_detail_component_1.SusDetailComponent],
            providers: []
        }), 
        __metadata('design:paramtypes', [sus_service_1.SusService])
    ], SusEditComponent);
    return SusEditComponent;
}());
exports.SusEditComponent = SusEditComponent;
//# sourceMappingURL=sus-edit.component.js.map