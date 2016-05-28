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
var plan_1 = require("./../Pojo/plan");
var plan_service_1 = require("../services/plan.service");
var cell_component_1 = require("./cell.component");
var tisch_1 = require("../Pojo/tisch");
var cell_1 = require("../Pojo/cell");
var plan_layout_1 = require("../plan-layout");
var markierung_1 = require("../Pojo/markierung");
var plan_manager_1 = require("../plan-manager");
var element_1 = require("../Pojo/element");
var lager_component_1 = require("./lager.component");
var plan_anordnung_1 = require("../plan-anordnung");
var plan_inout_component_1 = require("./plan-inout.component");
var PlanComponent = (function () {
    function PlanComponent(planService) {
        this.readonly = false;
        this.viewWidth = plan_layout_1.PlanLayout.getViewWidth;
        this.viewHeight = plan_layout_1.PlanLayout.getViewHeight;
        this.tafelLeft = plan_layout_1.PlanLayout.leftMitte;
        this.tafelTop = plan_layout_1.PlanLayout.getViewHeight;
        this.cells = [];
        this.planService = planService;
        this.plan = plan_1.Plan.createEmptyPlan();
    }
    Object.defineProperty(PlanComponent.prototype, "plan", {
        get: function () {
            return this._plan;
        },
        set: function (plan) {
            this._plan = plan;
            if (plan) {
                plan_layout_1.PlanLayout.setIJ(this._plan);
                this.buildComponents();
            }
        },
        enumerable: true,
        configurable: true
    });
    PlanComponent.prototype.getPlanComponent = function () {
        return this;
    };
    PlanComponent.prototype.buildComponents = function () {
        this.cells = [];
        for (var index = 0; index < plan_layout_1.PlanLayout.gridSize(); index++) {
            this.cells[index] = new cell_1.Cell(plan_layout_1.PlanLayout.getIJ(index));
        }
        for (var _i = 0, _a = this._plan.tische; _i < _a.length; _i++) {
            var tisch = _a[_i];
            var index = plan_layout_1.PlanLayout.getIndex(tisch);
            this.cells[index] = tisch;
        }
        this.markierung = new markierung_1.Markierung();
    };
    PlanComponent.prototype.tafelClick = function () {
        var planManager = new plan_manager_1.PlanManager(this._plan);
        planManager.losen();
    };
    PlanComponent.prototype.reihenClick = function () {
        var planAnordnung = new plan_anordnung_1.PlanAnordnung({ tische: this._plan.tische, blockBreite: 4 });
        planAnordnung.setzeReihen();
        this.plan = this._plan;
    };
    PlanComponent.prototype.uClick = function () {
        var planAnordnung;
        planAnordnung = new plan_anordnung_1.PlanAnordnung({ tische: this._plan.tische, blockBreite: 3 });
        planAnordnung.setzeU();
        this.plan = this._plan;
    };
    PlanComponent.prototype.swap = function (cell1, cell2) {
        var index1 = plan_layout_1.PlanLayout.getIndex(cell1);
        var index2 = plan_layout_1.PlanLayout.getIndex(cell2);
        var hilfi = cell1.i;
        var hilfj = cell1.j;
        cell1.i = cell2.i;
        cell1.j = cell2.j;
        cell2.i = hilfi;
        cell2.j = hilfj;
        this.cells[index2] = cell1;
        this.cells[index1] = cell2;
    };
    PlanComponent.prototype.elemClicked = function (element) {
        if (this.readonly)
            return;
        if (this.markierung.markierungVorhanden()) {
            this.onClickMitMarkierung(element);
            this.markierung.resetMarkierung();
        }
        else {
            if (element.isTisch() || element.isLager()) {
                this.markierung.setzeMarkierung(element);
            }
        }
    };
    PlanComponent.prototype.onClickMitMarkierung = function (element) {
        var markiert = this.markierung.getMarkiertes();
        if (element == markiert) {
            this.clickAufSelbesElement(element);
        }
        else if (markiert.isLager()) {
            this.neuerTischNachCheck(element);
        }
        else if (markiert.isTisch()) {
            if (element.isLager()) {
                this.entferneTischNachCheck(markiert);
            }
            else
                this.tauscheNachCheck(markiert, element);
        }
    };
    PlanComponent.prototype.tauscheNachCheck = function (elem1, elem2) {
        if ((elem1.typ == element_1.Elem.TYP_LEERERPLATZ || elem1.isTisch()) &&
            (elem2.typ == element_1.Elem.TYP_LEERERPLATZ || elem2.isTisch())) {
            var cell1 = elem1;
            var cell2 = elem2;
            this.swap(cell1, cell2);
        }
    };
    PlanComponent.prototype.neuerTischNachCheck = function (element) {
        if (element.typ == element_1.Elem.TYP_LEERERPLATZ) {
            var cell = element;
            var neuerTisch = tisch_1.Tisch.leererTisch();
            console.log(neuerTisch);
            neuerTisch.setIJ(cell.getI(), cell.getJ());
            this._plan.tische.push(neuerTisch);
            this.cells[plan_layout_1.PlanLayout.getIndex(cell)] = neuerTisch;
        }
    };
    PlanComponent.prototype.clickAufSelbesElement = function (element) {
        if (element.isTisch()) {
            element.toggleBelegbar();
        }
    };
    PlanComponent.prototype.entferneTischNachCheck = function (entferne) {
        if (entferne.isTisch() == false)
            return;
        var tisch = entferne;
        if (tisch.istBelegt())
            return;
        var neuCell = tisch.toCell();
        PlanComponent.remove(this._plan.tische, tisch);
        this.cells[plan_layout_1.PlanLayout.getIndex(tisch)] = neuCell;
    };
    PlanComponent.remove = function (tische, tisch) {
        var index = tische.indexOf(tisch);
        if (index > -1) {
            tische.splice(index, 1);
        }
    };
    PlanComponent.prototype.isMarkiert = function (element) {
        return this.markierung.istMarkiert(element);
    };
    PlanComponent.prototype.deltaI = function (delta) {
        plan_layout_1.PlanLayout.maxI = plan_layout_1.PlanLayout.maxI + delta;
        this.buildComponents();
    };
    PlanComponent.prototype.deltaJ = function (delta) {
        plan_layout_1.PlanLayout.maxJ = plan_layout_1.PlanLayout.maxJ + delta;
        this.buildComponents();
    };
    PlanComponent.prototype.deltaX = function (delta) {
        plan_layout_1.PlanLayout.viewWidth = plan_layout_1.PlanLayout.viewWidth + delta;
    };
    PlanComponent.prototype.deltaY = function (delta) {
        plan_layout_1.PlanLayout.viewHeight = plan_layout_1.PlanLayout.viewHeight + delta;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', plan_1.Plan), 
        __metadata('design:paramtypes', [plan_1.Plan])
    ], PlanComponent.prototype, "plan", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PlanComponent.prototype, "readonly", void 0);
    PlanComponent = __decorate([
        core_1.Component({
            selector: 'plan',
            template: "<div *ngIf=\"plan\">\n\n    <h1> {{plan.gruppeBezeichnung}} Nr. {{plan.nr}} in <input [(ngModel)] = \"plan.raum\"></h1>\n    Von: <input [(ngModel)] = \"plan.start\">\n    Bis: <input [(ngModel)] = \"plan.stop\">\n    <div>\n        <button (click)=\"deltaI(1)\">i+1</button>\n        <button (click)=\"deltaI(-1)\">i-1</button>\n        <button (click)=\"deltaJ(1)\">j+1</button>\n        <button (click)=\"deltaJ(-1)\">j-1</button>\n        <button (click)=\"deltaX(50)\">x+50</button>\n        <button (click)=\"deltaX(-50)\">x-50</button>\n        <button (click)=\"deltaY(50)\">y+50</button>\n        <button (click)=\"deltaY(-50)\">y-50</button>\n     </div>\n    <div class=\"plan\"\n         [style.width.px]=\"viewWidth()\"\n         [style.height.px]=\"viewHeight()\"\n    >\n\n        <cell *ngFor=\"let cell of cells\"\n              [cell]=\"cell\"\n              [planComponent]=\"getPlanComponent()\"\n        ></cell>\n\n        <div id=\"tafel\"\n             [style.top.px]=\"tafelTop()\"\n             [style.left.px]=\"tafelLeft()\"\n             (click)=\"tafelClick()\"\n        >Tafel\n        </div>\n    </div>\n\n    <button (click)=\"reihenClick()\">Reihen</button>\n    <button (click)=\"uClick()\">U-Form</button>\n\n\n    <lager\n            [planComponent]=\"getPlanComponent()\"\n    ></lager>\n</div>\n  \n",
            inputs: [],
            directives: [cell_component_1.CellComponent, lager_component_1.LagerComponent,
                plan_inout_component_1.PlanInout],
            providers: [],
            styles: [
                "input {\n            font-size: 30px;\n            color: red;\n            border: none;\n            }\n        "]
        }), 
        __metadata('design:paramtypes', [plan_service_1.PlanService])
    ], PlanComponent);
    return PlanComponent;
}());
exports.PlanComponent = PlanComponent;
//# sourceMappingURL=plan.component.js.map