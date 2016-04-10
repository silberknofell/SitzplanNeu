System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PlanManager;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by test on 12.01.2016.
             */
            PlanManager = (function () {
                function PlanManager(plan) {
                    this.sus = plan.getSusList();
                    this.tische = plan.getBelegteTischeList();
                }
                PlanManager.prototype.losen = function () {
                    var anzSus = this.sus.length;
                    var anzTische = this.tische.length;
                    var shuf = this.shuffle(anzTische);
                    var min = Math.min(anzSus, anzTische);
                    this.tische.map(function (tisch) { return tisch.removeSus(); });
                    for (var i = 0; i < min; i++) {
                        this.tische[shuf[i]].setSus(this.sus[i]);
                    }
                };
                PlanManager.prototype.shuffle = function (anzahl) {
                    var shuf = [];
                    for (var i = 0; i < anzahl; i++) {
                        shuf[i] = i;
                    }
                    for (var i = anzahl - 1; i > 0; i--) {
                        var z = PlanManager.zufallszahl(i);
                        var hilf = shuf[z];
                        shuf[z] = shuf[i];
                        shuf[i] = hilf;
                    }
                    return shuf;
                };
                PlanManager.zufallszahl = function (i) {
                    return Math.floor(Math.random() * (i + 1));
                };
                return PlanManager;
            }());
            exports_1("PlanManager", PlanManager);
        }
    }
});
//# sourceMappingURL=plan-manager.js.map