System.register(["angular2/core", "./element"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
    var core_1, element_1;
    var Cell;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (element_1_1) {
                element_1 = element_1_1;
            }],
        execute: function() {
            /**
             * Created by test on 03.01.2016.
             */
            Cell = (function (_super) {
                __extends(Cell, _super);
                function Cell(data) {
                    _super.call(this, element_1.Elem.TYP_LEERERPLATZ);
                    this.markierbar = true;
                    this.data = data;
                }
                Object.defineProperty(Cell.prototype, "j", {
                    get: function () {
                        return this.data.j;
                    },
                    set: function (value) {
                        this.data.j = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Cell.prototype, "i", {
                    get: function () {
                        return this.data.i;
                    },
                    set: function (value) {
                        this.data.i = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Cell.prototype, "fest", {
                    get: function () {
                        return this.data.fest;
                    },
                    set: function (value) {
                        this.data.fest = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Cell.prototype.setIJ = function (i, j) {
                    this.data.i = i;
                    this.data.j = j;
                };
                Cell.prototype.getI = function () {
                    return this.data.i;
                };
                Cell.prototype.getJ = function () {
                    return this.data.j;
                };
                Cell.prototype.getText = function () {
                    return '';
                    // return "i"+this.i+"/j"+this.j;
                };
                Cell = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [Object])
                ], Cell);
                return Cell;
            }(element_1.Elem));
            exports_1("Cell", Cell);
        }
    }
});
//# sourceMappingURL=cell.js.map