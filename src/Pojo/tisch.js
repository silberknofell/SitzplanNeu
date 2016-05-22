"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var cell_1 = require("./cell");
var sus_1 = require("./sus");
var core_1 = require("angular2/core");
var element_1 = require("./element");
var Tisch = (function (_super) {
    __extends(Tisch, _super);
    function Tisch(data) {
        _super.call(this, data);
        this._tischData = data;
        this.typ = element_1.Elem.TYP_TISCH_BELEGBAR;
    }
    Object.defineProperty(Tisch.prototype, "sus", {
        get: function () {
            return this._tischData.sus;
        },
        set: function (value) {
            this._tischData.sus = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tisch.prototype, "belegbar", {
        get: function () {
            return this._tischData.typ == Tisch.TYP_TISCH_BELEGBAR;
        },
        set: function (value) {
            if (this.istBelegt()) {
                console.log("Tisch" + this._tischData.i + this._tischData.j + " kann Belegbarkeit nicht verlieren, da er bereits belegt ist. Schüler id:" + this._tischData.sus.id);
            }
            else {
                this._tischData.typ = value ? Tisch.TYP_TISCH_BELEGBAR : Tisch.TYP_TISCH_IMMER_FREI;
            }
        },
        enumerable: true,
        configurable: true
    });
    Tisch.prototype.istBelegt = function () {
        return this.sus.id != 0;
    };
    Tisch.prototype.istFrei = function () {
        return this.istBelegt() == false;
    };
    Tisch.prototype.toggleBelegbar = function () {
        this.belegbar = !this.belegbar;
    };
    Tisch.prototype.getText = function () {
        if (this.belegbar)
            return this.sus.getShortName();
        return "- - -";
    };
    Tisch.prototype.removeSus = function () {
        this.sus = sus_1.Sus.leererSus();
    };
    Tisch.prototype.setSus = function (sus) {
        if (this.belegbar || sus.istLeer()) {
            this.sus = sus;
        }
        else {
            console.log("Tisch" + this.i + this.j + " soll unerlaubt belegt werden. Schüler id:" + sus.id);
        }
    };
    Tisch.prototype.toCell = function () {
        return new cell_1.Cell({ i: this.i, j: this.j });
    };
    Tisch.getLeereTischvorlage = function () {
        var vorlage = {
            i: 1,
            j: 1,
            sus: sus_1.Sus.leererSus(),
            typ: element_1.Elem.TYP_TISCH_BELEGBAR
        };
        return vorlage;
    };
    Tisch.leererTisch = function () {
        return new Tisch(Tisch.getLeereTischvorlage());
    };
    Tisch.prototype.getTischVorlage = function () {
        return {
            i: this.getI(),
            j: this.getJ(),
            typ: this.typ,
            sus: this.sus
        };
    };
    Tisch = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Object])
    ], Tisch);
    return Tisch;
}(cell_1.Cell));
exports.Tisch = Tisch;
//# sourceMappingURL=tisch.js.map