"use strict";
var Sus = (function () {
    function Sus(data) {
        this.data = data;
    }
    Object.defineProperty(Sus.prototype, "susData", {
        get: function () {
            return this.data;
        },
        enumerable: true,
        configurable: true
    });
    Sus.prototype.getShortName = function () {
        return this.data.name;
    };
    Sus.prototype.getLongName = function () {
        return this.data.nachname + ", " + this.data.name;
    };
    Sus.leererSus = function () {
        return new Sus({ id: 0, name: "", nachname: "" });
    };
    Sus.prototype.istLeer = function () {
        return this.data.id == 0;
    };
    Sus.prototype.getId = function () {
        return this.data.id;
    };
    return Sus;
}());
exports.Sus = Sus;
//# sourceMappingURL=sus.js.map