System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Elem;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by test on 28.02.2016.
             */
            Elem = (function () {
                function Elem(typ) {
                    this.markierbar = false;
                    this.typ = typ || 0;
                }
                Elem.TYP_LEERERPLATZ = 1;
                Elem.TYP_TISCH = 2;
                Elem.TYP_TAFEL = 2;
                Elem.TYP_LAGER = 3;
                return Elem;
            }());
            exports_1("Elem", Elem);
        }
    }
});
//# sourceMappingURL=element.js.map