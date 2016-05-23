"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require("rxjs/Observable");
var GroupsService = (function () {
    function GroupsService(http) {
        this.baseUrl = 'http://geihe.net/sitzplan2/rest/';
        this.http = http;
    }
    GroupsService.prototype.getGruppen = function () {
        var url = this.baseUrl + 'gruppen';
        return this.http.get(url)
            .map(function (res) {
            return res.json() || {};
        })
            .catch(this.handleError);
    };
    GroupsService.prototype.handleError = function (error) {
        var errMsg = error.message || 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    GroupsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GroupsService);
    return GroupsService;
}());
exports.GroupsService = GroupsService;
//# sourceMappingURL=groups.service.js.map