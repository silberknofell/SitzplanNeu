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
var SusDetailComponent = (function () {
    function SusDetailComponent() {
        this.susWrap = sus_1.SusWrap.leererSusWrap();
        this.onKeyUp = new core_1.EventEmitter();
    }
    Object.defineProperty(SusDetailComponent.prototype, "sus", {
        get: function () {
            return this.susWrap;
        },
        set: function (value) {
            this.susWrap = value || sus_1.SusWrap.leererSusWrap(this.gruppeId);
        },
        enumerable: true,
        configurable: true
    });
    SusDetailComponent.prototype.test = function () {
    };
    SusDetailComponent.prototype.keyUp = function () {
        this.onKeyUp.emit(null);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SusDetailComponent.prototype, "gruppeId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SusDetailComponent.prototype, "onKeyUp", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', sus_1.SusWrap)
    ], SusDetailComponent.prototype, "sus", null);
    SusDetailComponent = __decorate([
        core_1.Component({
            selector: 'sus-detail',
            template: "<form>\n    <div class=\"form-group\">\n        <label for=\"sus-name\">Name (Anzeige)</label>\n        <input type=\"text\" \n               class=\"form-control\" \n               id=\"sus-name\" \n               placeholder=\"Name\"\n               [(ngModel)]=\"sus.name\" \n               (keyup.enter)=\"test()\">        \n    </div>\n    <div class=\"form-group\">\n        <label for=\"sus-nachname\">Nachname</label>\n        <input type=\"text\" \n               class=\"form-control\" \n               id=\"sus-nachname\" \n               placeholder=\"Nachname\"\n               [(ngModel)]=\"sus.nachname\" \n               (keyup.enter)=\"test()\"\n               (keyup)=\"keyUp()\">        \n    </div>\n</form>\n\n\n",
            styles: ["\n\n  "],
            directives: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], SusDetailComponent);
    return SusDetailComponent;
}());
exports.SusDetailComponent = SusDetailComponent;
//# sourceMappingURL=sus-detail.component.js.map