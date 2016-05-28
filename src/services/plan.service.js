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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var plan_1 = require("../Pojo/plan");
var sus_1 = require("../Pojo/sus");
var plan_anordnung_1 = require("../plan-anordnung");
var plan_manager_1 = require("../plan-manager");
var Observable_1 = require("rxjs/Observable");
var PlanService = (function () {
    function PlanService(http) {
        this.baseUrl = 'http://geihe.net/sitzplan2/rest/';
        this.http = http;
    }
    PlanService.prototype.getPlaeneBeschreibung = function (gruppe_id) {
        var url = this.baseUrl + 'plaene/' + gruppe_id;
        return this.http.get(url)
            .map(this.extractPlanBeschreibung)
            .catch(this.handleError);
    };
    PlanService.prototype.extractPlanBeschreibung = function (res) {
        return res.json().map(function (vorlage) {
            return {
                id: vorlage.id,
                nr: vorlage.nr,
                text: vorlage.gruppe + " " + vorlage.raum + "(" + vorlage.nr + ")"
            };
        });
    };
    PlanService.prototype.handleError = function (error) {
        var errMsg = error.message || 'Server error';
        return Observable_1.Observable.throw(errMsg);
    };
    PlanService.prototype.getMaxNr = function () {
        return 99;
    };
    PlanService.prototype.savePlanVorlage = function (iPlan) {
        var url = this.baseUrl + 'plan';
        var planSQL = iPlan;
        planSQL.tische.forEach(function (t) {
            t.sus_id = t.sus.id;
            delete t.sus;
        });
        var body = JSON.stringify(planSQL);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .catch(this.handleError)
            .subscribe();
    };
    PlanService.prototype.readPlan = function (plan_id) {
        var url = this.baseUrl + 'plan/' + plan_id;
        return this.http.get(url)
            .map(this.extractPlan)
            .catch(this.handleError);
    };
    PlanService.prototype.extractPlan = function (res) {
        var planVorlage = res.json();
        planVorlage.extras = JSON.parse(planVorlage.extras);
        planVorlage.tische.forEach(function (t) { t.sus = new sus_1.Sus(t.sus); });
        return new plan_1.Plan(planVorlage);
    };
    PlanService.prototype.getPlanCopy = function (plan) {
        var vorlage = plan.createVorlage();
        vorlage.id = 0;
        vorlage.nr = this.getNewPlanNr();
        return new plan_1.Plan(vorlage);
    };
    PlanService.prototype.getNewPlan = function (sus) {
        var anzahlTische = sus.length;
        var planVorlage = plan_1.Plan.createNewVorlage(anzahlTische);
        var plan = new plan_1.Plan(planVorlage);
        var planAnordnung = new plan_anordnung_1.PlanAnordnung({ tische: plan.tische });
        var planManager = new plan_manager_1.PlanManager(plan, sus);
        planAnordnung.setzeU();
        planManager.losen();
        return plan;
    };
    ;
    PlanService.prototype.getNewPlanNr = function () {
        return this.getMaxNr() + 1;
    };
    PlanService.prototype.updatePlan = function (plan) {
        this.savePlanVorlage(plan.createVorlage());
    };
    PlanService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PlanService);
    return PlanService;
}());
exports.PlanService = PlanService;
//# sourceMappingURL=plan.service.js.map