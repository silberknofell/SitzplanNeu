"use strict";
var PlanLayout = (function () {
    function PlanLayout() {
    }
    PlanLayout.getViewWidth = function () {
        return PlanLayout.viewWidth;
    };
    PlanLayout.getViewHeight = function () {
        return PlanLayout.viewHeight;
    };
    PlanLayout.gridSize = function () {
        return PlanLayout.maxI * PlanLayout.maxJ;
    };
    PlanLayout.cellWidth = function () {
        return PlanLayout.viewWidth / PlanLayout.maxI - PlanLayout.rand2();
    };
    PlanLayout.cellHeight = function () {
        return PlanLayout.viewHeight / PlanLayout.maxJ - PlanLayout.rand2();
    };
    PlanLayout.rand2 = function () {
        return 2 * (PlanLayout.border + PlanLayout.margin);
    };
    PlanLayout.leftMitte = function () {
        return (PlanLayout.viewWidth - PlanLayout.cellWidth()) / 2;
    };
    PlanLayout.topMitte = function () {
        return (PlanLayout.viewHeight - PlanLayout.cellHeight()) / 2;
    };
    PlanLayout.setIJ = function (plan) {
        this.maxI = 1;
        this.maxJ = 1;
        for (var _i = 0, _a = plan.tische; _i < _a.length; _i++) {
            var tisch = _a[_i];
            if (tisch.i > this.maxI) {
                this.maxI = 1 * tisch.i;
            }
            ;
            if (tisch.j > this.maxJ) {
                this.maxJ = 1 * tisch.j;
            }
        }
    };
    PlanLayout.getIndex = function (cell) {
        return (cell.j - 1) * PlanLayout.maxI + (cell.i - 1);
    };
    PlanLayout.getIJ = function (index) {
        var i = (index % PlanLayout.maxI) + 1;
        var j = Math.floor(index / PlanLayout.maxI) + 1;
        return { 'i': i, 'j': j };
    };
    PlanLayout.viewWidth = 800;
    PlanLayout.viewHeight = 500;
    PlanLayout.border = 1;
    PlanLayout.margin = 3;
    PlanLayout.maxI = 9;
    PlanLayout.maxJ = 6;
    return PlanLayout;
}());
exports.PlanLayout = PlanLayout;
//# sourceMappingURL=plan-layout.js.map