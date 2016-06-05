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
    PlanLayout.getNull = function () {
        return 0;
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
    PlanLayout.xMitte = function () {
        return PlanLayout.viewWidth / 2;
    };
    PlanLayout.yMitte = function () {
        return PlanLayout.viewHeight / 2;
    };
    PlanLayout.xHalfCell = function () {
        return PlanLayout.cellWidth() / 2;
    };
    PlanLayout.yHalfCell = function () {
        return PlanLayout.cellHeight() / 2;
    };
    PlanLayout.setIJ = function (plan) {
        var result = PlanLayout.getMaxIJFromPlan(plan);
        this.maxI = result.i;
        this.maxJ = result.j;
    };
    PlanLayout.getMaxIJFromPlan = function (plan) {
        var maxI = 1;
        var maxJ = 1;
        for (var _i = 0, _a = plan.tische; _i < _a.length; _i++) {
            var tisch = _a[_i];
            if (tisch.i > maxI) {
                maxI = +tisch.i;
            }
            if (tisch.j > maxJ) {
                maxJ = +tisch.j;
            }
        }
        return { i: maxI, j: maxJ };
    };
    PlanLayout.deltaI = function (plan, delta) {
        var neuI = PlanLayout.maxI + delta;
        var maxI = PlanLayout.getMaxIJFromPlan(plan).i;
        console.log(neuI, maxI);
        if (neuI >= maxI && neuI >= 1) {
            PlanLayout.maxI = neuI;
        }
    };
    PlanLayout.deltaJ = function (plan, delta) {
        var neuJ = PlanLayout.maxJ + delta;
        var maxJ = PlanLayout.getMaxIJFromPlan(plan).j;
        if (neuJ >= maxJ && neuJ >= 1) {
            PlanLayout.maxJ = neuJ;
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
    PlanLayout.viewWidth = 600;
    PlanLayout.viewHeight = 400;
    PlanLayout.border = 1;
    PlanLayout.margin = 3;
    PlanLayout.maxI = 9;
    PlanLayout.maxJ = 6;
    return PlanLayout;
}());
exports.PlanLayout = PlanLayout;
//# sourceMappingURL=plan-layout.js.map