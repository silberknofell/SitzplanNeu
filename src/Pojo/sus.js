"use strict";
var Sus = (function () {
    function Sus(data) {
        this.data = data;
        this.data = data;
    }
    Object.defineProperty(Sus.prototype, "gruppe_id", {
        set: function (value) {
            this.data.gruppe_id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sus.prototype, "name", {
        get: function () {
            return this.data.name;
        },
        set: function (value) {
            this.data.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sus.prototype, "nachname", {
        get: function () {
            return this.data.nachname;
        },
        set: function (value) {
            this.data.nachname = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sus.prototype, "id", {
        get: function () {
            return this.data.id;
        },
        set: function (value) {
            this.data.id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sus.prototype, "susData", {
        get: function () {
            return this.data;
        },
        enumerable: true,
        configurable: true
    });
    Sus.prototype.getShortName = function () {
        return this.name;
    };
    Sus.prototype.getLongName = function () {
        return this.nachname + ", " + this.name;
    };
    Sus.leererSus = function (gruppeId) {
        if (gruppeId === void 0) { gruppeId = 0; }
        return new Sus(Sus.leererISus(gruppeId));
    };
    Sus.leererISus = function (gruppeId) {
        if (gruppeId === void 0) { gruppeId = 0; }
        return {
            id: 0,
            name: "",
            nachname: "",
            gruppe_id: gruppeId,
            aktiv: 1,
            extras: "{}"
        };
    };
    Sus.prototype.istLeer = function () {
        return !!name;
    };
    return Sus;
}());
exports.Sus = Sus;
var SusWrap = (function () {
    function SusWrap(_sus) {
        this._sus = _sus;
        this.changed = _sus.istLeer();
        this.deleted = false;
    }
    Object.defineProperty(SusWrap.prototype, "sus", {
        get: function () {
            return this._sus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SusWrap.prototype, "name", {
        get: function () {
            return this._sus.name;
        },
        set: function (value) {
            this._sus.name = value;
            this.changed = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SusWrap.prototype, "nachname", {
        get: function () {
            return this._sus.nachname;
        },
        set: function (value) {
            this._sus.nachname = value;
            this.changed = true;
        },
        enumerable: true,
        configurable: true
    });
    SusWrap.prototype.deleteThis = function () {
        this.deleted = true;
    };
    SusWrap.prototype.getLongName = function () {
        return this.sus.getLongName();
    };
    SusWrap.prototype.isDeleted = function () {
        return this.deleted;
    };
    SusWrap.prototype.isChanged = function () {
        return this.changed;
    };
    SusWrap.leererSusWrap = function (gruppeId) {
        if (gruppeId === void 0) { gruppeId = 0; }
        return new SusWrap(Sus.leererSus(gruppeId));
    };
    return SusWrap;
}());
exports.SusWrap = SusWrap;
//# sourceMappingURL=sus.js.map