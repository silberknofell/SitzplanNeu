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
var sus_1 = require("../Pojo/sus");
var SusService = (function () {
    function SusService(http) {
        this.baseUrl = 'http://geihe.net/sitzplan2/rest/';
        this.http = http;
    }
    SusService.prototype.getSusInGruppe = function (gruppe_id) {
        var url = this.baseUrl + 'suslist/' + gruppe_id;
        return this.http.get(url)
            .map(this.extractSus)
            .catch(this.handleError);
    };
    SusService.prototype.extractSus = function (res) {
        return res.json()
            .map(function (s) { return new sus_1.Sus(s); }) || {};
    };
    SusService.prototype.handleError = function (error) {
        var errMsg = error.message || 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    SusService.prototype.saveSus = function (sus) {
        var url = this.baseUrl + 'sus';
        var body = JSON.stringify(sus.susData);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .catch(this.handleError);
    };
    SusService.prototype.getSusInListe = function (liste) {
        var url = this.baseUrl + 'suslist';
        var body = JSON.stringify(liste);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .map(this.extractSus)
            .catch(this.handleError);
    };
    SusService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SusService);
    return SusService;
}());
exports.SusService = SusService;
//# sourceMappingURL=sus.service.js.map