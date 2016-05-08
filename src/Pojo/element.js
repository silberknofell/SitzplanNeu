"use strict";
var Elem = (function () {
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
exports.Elem = Elem;
//# sourceMappingURL=element.js.map