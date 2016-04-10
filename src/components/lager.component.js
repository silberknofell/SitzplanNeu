System.register(['angular2/core', "../Pojo/element"], function(exports_1, context_1) {
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
    var core_1, element_1;
    var LagerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (element_1_1) {
                element_1 = element_1_1;
            }],
        execute: function() {
            LagerComponent = (function () {
                function LagerComponent() {
                    this.lager = new element_1.Elem(element_1.Elem.TYP_LAGER);
                }
                LagerComponent.prototype.lagerClicked = function () {
                    this.planComponent.elemClicked(this.lager);
                };
                LagerComponent.prototype.getCssClass = function () {
                    var classes = "";
                    if (this.isMarkiert()) {
                        classes += " markiert";
                    }
                    return classes;
                };
                LagerComponent.prototype.isMarkiert = function () {
                    return this.planComponent.isMarkiert(this.lager);
                };
                LagerComponent = __decorate([
                    core_1.Component({
                        selector: 'lager',
                        template: "<div id=\"lager\"\n                [ngClass] = \"getCssClass()\"\n                (click) = \"lagerClicked()\"\n                >\n    Lager\n    </div>\n    ",
                        directives: [],
                        providers: [],
                        inputs: ['planComponent']
                    }), 
                    __metadata('design:paramtypes', [])
                ], LagerComponent);
                return LagerComponent;
            }());
            exports_1("LagerComponent", LagerComponent);
        }
    }
});
//# sourceMappingURL=lager.component.js.map