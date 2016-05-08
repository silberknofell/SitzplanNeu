"use strict";
var Markierung = (function () {
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
exports.Markierung = Markierung;
//# sourceMappingURL=markierung.js.map