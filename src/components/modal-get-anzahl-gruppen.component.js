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
var gruppen_erstellen_component_1 = require("./gruppen-erstellen.component");
var ModalGetAnzahlGruppen = (function () {
    function ModalGetAnzahlGruppen() {
        this.onClose = new core_1.EventEmitter();
    }
    Object.defineProperty(ModalGetAnzahlGruppen.prototype, "liste", {
        get: function () {
            console.log(this.anzahlListe);
            if (this.anzahlListe) {
                return this.anzahlListe.liste;
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    ModalGetAnzahlGruppen.prototype.onClick = function (n) {
        this.onClose.emit(n);
    };
    ModalGetAnzahlGruppen.prototype.text = function (anzahl) {
        var anzahlSus = this.anzahlListe.anzahlSus;
        var minGruppenGroesse = Math.floor(anzahlSus / anzahl);
        var alleGleich = anzahlSus % anzahl == 0;
        var groesseString = "Größe: "
            + minGruppenGroesse
            + (alleGleich ? "" : "-" + (minGruppenGroesse + 1));
        return anzahl + " Gruppen / " + groesseString;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', gruppen_erstellen_component_1.AnzahlListe)
    ], ModalGetAnzahlGruppen.prototype, "anzahlListe", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ModalGetAnzahlGruppen.prototype, "onClose", void 0);
    ModalGetAnzahlGruppen = __decorate([
        core_1.Component({
            selector: 'modal-get-anzahl-gruppen',
            template: "\n<div  id=\"myModal\" class=\"dialog\">\n\n  <!-- Modal content -->\n  <div class=\"dialog-content\">\n\n    <button class=\"btn btn-primary\"\n            *ngFor=\"let anzahl of liste\"\n            (click) = \"onClick(anzahl)\"\n            >{{text(anzahl)}}\n    </button>\n    <button class=\"btn btn-danger\" (click) = \"onClick(0)\">\n        <span class=\"fa fa-times\"></span> Abbrechen\n    </button>\n  </div>\n\n</div>    \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ModalGetAnzahlGruppen);
    return ModalGetAnzahlGruppen;
}());
exports.ModalGetAnzahlGruppen = ModalGetAnzahlGruppen;
//# sourceMappingURL=modal-get-anzahl-gruppen.component.js.map