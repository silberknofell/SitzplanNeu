System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Sus;
    return {
        setters:[],
        execute: function() {
            Sus = (function () {
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
            exports_1("Sus", Sus);
        }
    }
});
//# sourceMappingURL=sus.js.map