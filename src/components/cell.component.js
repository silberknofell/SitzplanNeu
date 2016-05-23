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
var plan_layout_1 = require("../plan-layout");
var element_1 = require("../Pojo/element");
var CellComponent = (function () {
    function CellComponent() {
        this.cellWidth = plan_layout_1.PlanLayout.cellWidth;
        this.cellHeight = plan_layout_1.PlanLayout.cellHeight;
        this.viewWidth = plan_layout_1.PlanLayout.viewWidth;
        this.viewHeight = plan_layout_1.PlanLayout.viewHeight;
        this.border = plan_layout_1.PlanLayout.border;
        this.margin = plan_layout_1.PlanLayout.margin;
    }
    CellComponent.prototype.getLeft = function () {
        return (this.cell.i - 1) / plan_layout_1.PlanLayout.maxI * plan_layout_1.PlanLayout.viewWidth;
    };
    CellComponent.prototype.getTop = function () {
        return (1 - this.cell.j / plan_layout_1.PlanLayout.maxJ) * plan_layout_1.PlanLayout.viewHeight;
    };
    CellComponent.prototype.isFixed = function () {
        return false;
    };
    CellComponent.prototype.getCssClass = function () {
        var classes = "";
        if (this.cell.typ == element_1.Elem.TYP_TISCH_BELEGBAR) {
            classes += 'tisch';
        }
        else {
            classes += 'free';
        }
        if (this.isMarkiert()) {
            classes += " markiert";
        }
        return classes;
    };
    CellComponent.prototype.getText = function () {
        return this.cell.getText();
    };
    CellComponent.prototype.cellClicked = function () {
        this.planComponent.elemClicked(this.cell);
    };
    CellComponent.prototype.isMarkiert = function () {
        return this.planComponent.isMarkiert(this.cell);
    };
    CellComponent = __decorate([
        core_1.Component({
            selector: 'cell',
            template: "<div\n               [style.width.px]=\"cellWidth()\"\n               [style.line-height.px]=\"cellHeight()\"\n               [style.height.px]=\"cellHeight()\"\n               [style.border-width.px]=\"border\"\n               [style.margin.px]=\"margin\"\n               [style.left.px]=\"getLeft()\"\n               [style.top.px]=\"getTop()\"\n               [ngClass] =\"getCssClass()\"\n               (click) = \"cellClicked()\"\n               >\n    {{getText()}}\n    </div>\n  ",
            directives: [],
            providers: [],
            inputs: ['cell', 'planComponent']
        }), 
        __metadata('design:paramtypes', [])
    ], CellComponent);
    return CellComponent;
}());
exports.CellComponent = CellComponent;
//# sourceMappingURL=cell.component.js.map