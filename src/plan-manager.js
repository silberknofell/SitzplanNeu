"use strict";
var PlanManager = (function () {
    function PlanManager(plan, susList) {
        this.sus = susList || plan.getSusList();
        this.tische = plan.getBelegbareTischeList();
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
exports.PlanManager = PlanManager;
;
//# sourceMappingURL=plan-manager.js.map