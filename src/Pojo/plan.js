System.register(["./tisch", "./sus"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tisch_1, sus_1;
    var Plan;
    return {
        setters:[
            function (tisch_1_1) {
                tisch_1 = tisch_1_1;
            },
            function (sus_1_1) {
                sus_1 = sus_1_1;
            }],
        execute: function() {
            /**
             * Created by test on 29.12.2015.
             */
            Plan = (function () {
                function Plan(data) {
                    var _this = this;
                    this.data = data;
                    this.susHash = [];
                    for (var _i = 0, _a = data.sus; _i < _a.length; _i++) {
                        var s = _a[_i];
                        this.susHash[s.id] = new sus_1.Sus(s);
                    }
                    this._tische =
                        data.tische.map(function (t) {
                            var sus = _this.getSusFromTisch(t);
                            return new tisch_1.Tisch(t, sus);
                        });
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
                Object.defineProperty(Plan.prototype, "gruppe", {
                    get: function () {
                        return this.data.gruppe;
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
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Plan.prototype, "start", {
                    get: function () {
                        return this.data.start;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Plan.prototype, "stop", {
                    get: function () {
                        return this.data.stop;
                    },
                    enumerable: true,
                    configurable: true
                });
                Plan.prototype.getSusFromTisch = function (t) {
                    var id = t.sus_id;
                    return id == 0 ? sus_1.Sus.leererSus() : this.susHash[t.sus_id];
                };
                ;
                Plan.prototype.getBelegteTischeList = function () {
                    return this._tische.filter(function (t) { return t.belegbar; });
                };
                Plan.prototype.getSusList = function () {
                    return Plan.filt(this.susHash);
                };
                Plan.filt = function (a) {
                    var b = [];
                    for (var i in a) {
                        b.push(a[i]);
                    }
                    return b;
                };
                Plan.prototype.getJSON = function () {
                    return JSON.stringify(this.createVorlage());
                };
                Plan.prototype.createVorlage = function () {
                    return {
                        id: this.data.id,
                        gruppe: this.data.gruppe,
                        nr: this.data.nr,
                        raum: this.data.raum,
                        start: this.data.start,
                        stop: this.data.stop,
                        tische: this.tische.map(function (t) { return t.tischData; }),
                        sus: this.getSusList().map(function (s) { return s.susData; })
                    };
                };
                Plan.prototype.getMinTischId = function () {
                    return Math.min.apply(Math, this.tische.map(function (t) { return t.id; }));
                };
                Plan.createNewVorlage = function (anzahlTische) {
                    var vorlage = {
                        id: -1,
                        gruppe: 'Gruppe',
                        nr: -1,
                        raum: 'Raum',
                        start: 'start',
                        stop: 'stop',
                        tische: [],
                        sus: []
                    };
                    for (var i = 0; i <= anzahlTische; i++) {
                        vorlage.tische.push(tisch_1.Tisch.getLeereTischvorlage());
                    }
                    return vorlage;
                };
                return Plan;
            }());
            exports_1("Plan", Plan);
        }
    }
});
//# sourceMappingURL=plan.js.map