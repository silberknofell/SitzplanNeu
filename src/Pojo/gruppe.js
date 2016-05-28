"use strict";
var Gruppe = (function () {
    function Gruppe(data) {
        this.data = data;
    }
    Object.defineProperty(Gruppe.prototype, "extras", {
        get: function () {
            return this.data.extras;
        },
        set: function (value) {
            this.data.extras = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gruppe.prototype, "bezeichnung", {
        get: function () {
            return this.data.bezeichnung;
        },
        set: function (value) {
            this.data.bezeichnung = value;
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
    Gruppe.prototype.getVorlage = function () {
        return this.data;
    };
    Gruppe.leereGruppe = function () {
        return new Gruppe({
            id: 0,
            bezeichnung: "neu",
            extras: {},
            kennwort: "12345"
        });
    };
    return Gruppe;
}());
exports.Gruppe = Gruppe;
//# sourceMappingURL=gruppe.js.map