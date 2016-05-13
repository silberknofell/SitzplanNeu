"use strict";
var Gruppe = (function () {
    function Gruppe(data) {
        this.data = data;
    }
    Object.defineProperty(Gruppe.prototype, "bezeichnung", {
        get: function () {
            return this.data.bezeichnung;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gruppe.prototype, "id", {
        get: function () {
            return this.data.id;
        },
        enumerable: true,
        configurable: true
    });
    return Gruppe;
}());
exports.Gruppe = Gruppe;
//# sourceMappingURL=gruppe.js.map