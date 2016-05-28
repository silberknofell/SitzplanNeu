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
var sus_1 = require("../Pojo/sus");
var sus_service_1 = require("../services/sus.service");
var SusDetailComponent = (function () {
    function SusDetailComponent(susService) {
        this.susService = susService;
        this._sus = sus_1.Sus.leererSus();
        this.susService = susService;
    }
    Object.defineProperty(SusDetailComponent.prototype, "sus", {
        get: function () {
            return this._sus;
        },
        set: function (value) {
            this._sus = value || sus_1.Sus.leererSus();
            this._sus.gruppe_id = this.gruppeId;
        },
        enumerable: true,
        configurable: true
    });
    SusDetailComponent.prototype.neu = function () {
        this.sus = null;
    };
    SusDetailComponent.prototype.speichern = function () {
        this.susService.saveSus(this.sus)
            .subscribe();
    };
    SusDetailComponent.prototype.delete = function () {
        this.susService.deleteSus(this.sus.id)
            .subscribe();
    };
    SusDetailComponent.prototype.test = function () {
        this.susService.getSusInListe([1, 2, 3])
            .subscribe();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SusDetailComponent.prototype, "gruppeId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', sus_1.Sus)
    ], SusDetailComponent.prototype, "sus", null);
    SusDetailComponent = __decorate([
        core_1.Component({
            selector: 'sus-detail',
            template: "\nName <input type=\"text\" name=\"name\" [(ngModel)]=\"sus.name\" /><br />\nNachname<input type=\"text\" name=\"nachname\" [(ngModel)]=\"sus.nachname\" /><br />\n\n<button (click)=\"neu()\">Neu</button>\n<button (click)=\"speichern()\">Speichern</button>\n<button (click)=\"delete()\">L\u00D6SCHEN</button>\n\n  ",
            styles: ["\n\n  "],
            directives: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [sus_service_1.SusService])
    ], SusDetailComponent);
    return SusDetailComponent;
}());
exports.SusDetailComponent = SusDetailComponent;
//# sourceMappingURL=sus-detail.component.js.map