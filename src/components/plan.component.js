System.register(["angular2/core", "../plan.service", "./cell.component", "../Pojo/tisch", "../Pojo/cell", "../plan-layout", "../Pojo/markierung", "../plan-manager", "../Pojo/element", "./lager.component", "../plan-anordnung", "./plan-select.component", "./plan-inout.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, plan_service_1, cell_component_1, tisch_1, cell_1, plan_layout_1, markierung_1, plan_manager_1, element_1, lager_component_1, plan_anordnung_1, plan_select_component_1, plan_inout_component_1;
    var PlanComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (plan_service_1_1) {
                plan_service_1 = plan_service_1_1;
            },
            function (cell_component_1_1) {
                cell_component_1 = cell_component_1_1;
            },
            function (tisch_1_1) {
                tisch_1 = tisch_1_1;
            },
            function (cell_1_1) {
                cell_1 = cell_1_1;
            },
            function (plan_layout_1_1) {
                plan_layout_1 = plan_layout_1_1;
            },
            function (markierung_1_1) {
                markierung_1 = markierung_1_1;
            },
            function (plan_manager_1_1) {
                plan_manager_1 = plan_manager_1_1;
            },
            function (element_1_1) {
                element_1 = element_1_1;
            },
            function (lager_component_1_1) {
                lager_component_1 = lager_component_1_1;
            },
            function (plan_anordnung_1_1) {
                plan_anordnung_1 = plan_anordnung_1_1;
            },
            function (plan_select_component_1_1) {
                plan_select_component_1 = plan_select_component_1_1;
            },
            function (plan_inout_component_1_1) {
                plan_inout_component_1 = plan_inout_component_1_1;
            }],
        execute: function() {
            PlanComponent = (function () {
                function PlanComponent(planService) {
                    this.readonly = false;
                    this.viewWidth = plan_layout_1.PlanLayout.getViewWidth;
                    this.viewHeight = plan_layout_1.PlanLayout.getViewHeight;
                    this.tafelLeft = plan_layout_1.PlanLayout.leftMitte;
                    this.tafelTop = plan_layout_1.PlanLayout.getViewHeight;
                    this.cells = [];
                    this.planService = planService;
                    planService.setGruppeId(1);
                    this.setPlan(planService.readPlan(1));
                    plan_layout_1.PlanLayout.setIJ(this.plan);
                    this.buildComponents();
                }
                PlanComponent.prototype.setPlan = function (plan) {
                    this.plan = plan;
                    plan_layout_1.PlanLayout.setIJ(this.plan);
                    this.buildComponents();
                };
                PlanComponent.prototype.getPlanComponent = function () {
                    return this;
                };
                PlanComponent.prototype.buildComponents = function () {
                    this.cells = [];
                    for (var index = 0; index < plan_layout_1.PlanLayout.gridSize(); index++) {
                        this.cells[index] = new cell_1.Cell(plan_layout_1.PlanLayout.getIJ(index));
                    }
                    for (var _i = 0, _a = this.plan.tische; _i < _a.length; _i++) {
                        var tisch = _a[_i];
                        var index = plan_layout_1.PlanLayout.getIndex(tisch);
                        this.cells[index] = tisch;
                    }
                    this.markierung = new markierung_1.Markierung();
                };
                PlanComponent.prototype.tafelClick = function () {
                    var planManager = new plan_manager_1.PlanManager(this.plan);
                    planManager.losen();
                };
                PlanComponent.prototype.reihenClick = function () {
                    var planAnordnung = new plan_anordnung_1.PlanAnordnung({ tische: this.plan.tische, blockBreite: 4 });
                    planAnordnung.setzeReihen();
                    this.setPlan(this.plan);
                };
                PlanComponent.prototype.uClick = function () {
                    var planAnordnung;
                    planAnordnung = new plan_anordnung_1.PlanAnordnung({ tische: this.plan.tische, blockBreite: 3 });
                    planAnordnung.setzeU();
                    this.setPlan(this.plan);
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
                        if (element.typ == element_1.Elem.TYP_TISCH || element.typ == element_1.Elem.TYP_LAGER) {
                            this.markierung.setzeMarkierung(element);
                        }
                    }
                };
                PlanComponent.prototype.onClickMitMarkierung = function (element) {
                    var markiert = this.markierung.getMarkiertes();
                    if (element == markiert) {
                        this.clickAufSelbesElement(element);
                    }
                    else if (markiert.typ == element_1.Elem.TYP_LAGER) {
                        this.neuerTischNachCheck(element);
                    }
                    else if (markiert.typ == element_1.Elem.TYP_TISCH) {
                        if (element.typ == element_1.Elem.TYP_LAGER) {
                            this.entferneTischNachCheck(markiert);
                        }
                        else
                            this.tauscheNachCheck(markiert, element);
                    }
                };
                PlanComponent.prototype.tauscheNachCheck = function (elem1, elem2) {
                    if ((elem1.typ == element_1.Elem.TYP_LEERERPLATZ || elem1.typ == element_1.Elem.TYP_TISCH) &&
                        (elem1.typ == element_1.Elem.TYP_LEERERPLATZ || elem1.typ == element_1.Elem.TYP_TISCH)) {
                        var cell1 = elem1;
                        var cell2 = elem2;
                        this.swap(cell1, cell2);
                    }
                };
                PlanComponent.prototype.neuerTischNachCheck = function (element) {
                    if (element.typ == element_1.Elem.TYP_LEERERPLATZ) {
                        var cell = element;
                        var newId = Math.min(this.plan.getMinTischId(), 0) - 1;
                        var tischVorlage = {
                            i: cell.getI(),
                            j: cell.getJ(),
                            belegbar: true,
                            sus_id: 0,
                            id: newId
                        };
                        var neuerTisch = new tisch_1.Tisch(tischVorlage, null);
                        this.plan.tische.push(neuerTisch);
                        this.cells[plan_layout_1.PlanLayout.getIndex(cell)] = neuerTisch;
                    }
                };
                PlanComponent.prototype.clickAufSelbesElement = function (element) {
                    if (element.typ == element_1.Elem.TYP_TISCH) {
                        element.toggleBelegbar();
                    }
                };
                PlanComponent.prototype.entferneTischNachCheck = function (entferne) {
                    if (entferne.typ != element_1.Elem.TYP_TISCH)
                        return;
                    var tisch = entferne;
                    if (tisch.istBelegt())
                        return;
                    var neuCell = tisch.toCell();
                    PlanComponent.remove(this.plan.tische, tisch);
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
                PlanComponent = __decorate([
                    core_1.Component({
                        selector: 'plan',
                        template: "<button (click)=\"deltaI(1)\">i+1</button>\n<button (click)=\"deltaI(-1)\">i-1</button>\n<button (click)=\"deltaJ(1)\">j+1</button>\n<button (click)=\"deltaJ(-1)\">j-1</button>\n<button (click)=\"deltaX(50)\">x+50</button>\n<button (click)=\"deltaX(-50)\">x-50</button>\n<button (click)=\"deltaY(50)\">y+50</button>\n<button (click)=\"deltaY(-50)\">y-50</button>\n\n<h1>Sitzplan {{plan.gruppe}} {{plan.raum}}</h1>\n<div class=\"plan\"\n     [style.width.px]=\"viewWidth()\"\n     [style.height.px]=\"viewHeight()\"\n>\n\n    <cell *ngFor=\"#cell of cells\"\n          [cell]=\"cell\"\n          [planComponent]=\"getPlanComponent()\"\n    ></cell>\n\n    <div id=\"tafel\"\n         [style.top.px]=\"tafelTop()\"\n         [style.left.px]=\"tafelLeft()\"\n         (click)=\"tafelClick()\"\n    >Tafel\n    </div>\n</div>\n\n\n<button (click)=\"reihenClick()\">Reihen</button>\n<button (click)=\"uClick()\">U-Form</button>\n\n<plan-inout\n        [planComponent]=\"getPlanComponent()\"\n        [plan] = \"plan\"\n></plan-inout>\n<plan-select\n        [planComponent]=\"getPlanComponent()\"\n></plan-select>\n<lager\n        [planComponent]=\"getPlanComponent()\"\n></lager>\n  ",
                        inputs: ['readonly'],
                        directives: [cell_component_1.CellComponent, lager_component_1.LagerComponent, plan_select_component_1.PlanSelectComponent,
                            plan_inout_component_1.PlanInout],
                        providers: [plan_service_1.PlanService],
                    }), 
                    __metadata('design:paramtypes', [plan_service_1.PlanService])
                ], PlanComponent);
                return PlanComponent;
            }());
            exports_1("PlanComponent", PlanComponent);
        }
    }
});
//# sourceMappingURL=plan.component.js.map