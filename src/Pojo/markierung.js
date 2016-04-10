System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Markierung;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by test on 10.01.2016.
             */
            Markierung = (function () {
                function Markierung() {
                    this.elem = null;
                }
                Markierung.prototype.resetMarkierung = function () {
                    this.elem = null;
                };
                ;
                Markierung.prototype.setzeMarkierung = function (element) {
                    this.elem = element;
                };
                ;
                Markierung.prototype.markierungVorhanden = function () {
                    return this.elem != null;
                };
                ;
                Markierung.prototype.istMarkiert = function (element) {
                    return this.elem == element;
                };
                ;
                Markierung.prototype.getMarkiertes = function () {
                    return this.elem;
                };
                ;
                return Markierung;
            }());
            exports_1("Markierung", Markierung);
        }
    }
});
//# sourceMappingURL=markierung.js.map