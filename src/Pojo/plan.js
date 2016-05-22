"use strict";
var tisch_1 = require("./tisch");
var Plan = (function () {
    function Plan(data) {
        this.data = data;
        this._tische =
            data.tische.map(function (t) { return new tisch_1.Tisch(t); });
    }
    Object.defineProperty(Plan.prototype, "tische", {
        get: function () {
            return this._tische;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plan.prototype, "id", {
        get: function () {
            return this.data.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plan.prototype, "gruppeBezeichnung", {
        get: function () {
            return this.data.gruppe;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plan.prototype, "gruppe", {
        set: function (gruppe) {
            this.data.gruppe = gruppe.bezeichnung;
            this.data.id = gruppe.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plan.prototype, "nr", {
        get: function () {
            return this.data.nr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plan.prototype, "raum", {
        get: function () {
            return this.data.raum;
        },
        set: function (raum) {
            this.data.raum = raum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plan.prototype, "start", {
        get: function () {
            return this.data.start;
        },
        set: function (start) {
            this.data.start = start;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plan.prototype, "stop", {
        get: function () {
            return this.data.stop;
        },
        set: function (stop) {
            this.data.stop = stop;
        },
        enumerable: true,
        configurable: true
    });
    Plan.prototype.getBelegbareTischeList = function () {
        return this._tische.filter(function (t) { return t.belegbar; });
    };
    Plan.prototype.getSusList = function () {
        return this.tische
            .map(function (tisch) { return tisch.sus; })
            .filter(function (sus) { return sus.istLeer() == false; });
    };
    Plan.prototype.getJSON = function () {
        return JSON.stringify(this.createVorlage());
    };
    Plan.prototype.createVorlage = function () {
        return {
            id: this.data.id,
            gruppe: this.data.gruppe,
            gruppe_id: this.data.gruppe_id,
            nr: this.data.nr,
            raum: this.data.raum,
            start: this.data.start,
            stop: this.data.stop,
            extras: JSON.stringify(this.data.extras),
            tische: this.tische.map(function (t) { return t.getTischVorlage(); })
        };
    };
    Plan.createNewVorlage = function (anzahlTische) {
        var vorlage = {
            id: 0,
            gruppe: 'neue Gruppe',
            gruppe_id: 0,
            nr: 0,
            raum: 'Raum',
            start: 'start',
            stop: 'stop',
            extras: {},
            tische: []
        };
        for (var i = 0; i < anzahlTische; i++) {
            vorlage.tische.push(tisch_1.Tisch.getLeereTischvorlage());
        }
        return vorlage;
    };
    Plan.createEmptyPlan = function (anzahlTische) {
        if (anzahlTische === void 0) { anzahlTische = 0; }
        return new Plan(this.createNewVorlage(anzahlTische));
    };
    return Plan;
}());
exports.Plan = Plan;
//# sourceMappingURL=plan.js.map