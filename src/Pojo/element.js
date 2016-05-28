"use strict";
var Elem = (function () {
    function Elem(typ) {
        this.markierbar = false;
        this.typ = typ || 0;
    }
    Elem.prototype.isTisch = function () {
        return (this.typ == Elem.TYP_TISCH_BELEGBAR) || (this.typ == Elem.TYP_TISCH_IMMER_FREI);
    };
    Elem.prototype.isLager = function () {
        return this.typ == Elem.TYP_LAGER;
    };
    Elem.prototype.isBeweglich = function () {
        return this.typ != Elem.TYP_LAGER;
    };
    Elem.TYP_LEERERPLATZ = 1;
    Elem.TYP_TISCH_BELEGBAR = 2;
    Elem.TYP_TISCH_IMMER_FREI = 3;
    Elem.TYP_LAGER = 4;
    return Elem;
}());
exports.Elem = Elem;
//# sourceMappingURL=element.js.map