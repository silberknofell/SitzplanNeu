System.register(['angular2/core', 'angular2/http', "./Pojo/plan", "./plan-anordnung", "./plan-manager"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, plan_1, plan_anordnung_1, plan_manager_1;
    var PlanService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (plan_1_1) {
                plan_1 = plan_1_1;
            },
            function (plan_anordnung_1_1) {
                plan_anordnung_1 = plan_anordnung_1_1;
            },
            function (plan_manager_1_1) {
                plan_manager_1 = plan_manager_1_1;
            }],
        execute: function() {
            PlanService = (function () {
                function PlanService(http) {
                }
                PlanService.prototype.setGruppeId = function (gruppeId) {
                    this.gruppeId = gruppeId;
                    this.initLocalStorage();
                };
                PlanService.prototype.getPlaeneBeschreibung = function () {
                    var _this = this;
                    var keys = Object.keys(localStorage);
                    return keys.map(function (key) {
                        var item = window.localStorage.getItem(key);
                        var pv = JSON.parse(item);
                        return _this.description(pv);
                    });
                };
                PlanService.prototype.getMaxNr = function () {
                    var nrs = this.getPlaeneBeschreibung()
                        .map(function (description) {
                        return description.nr;
                    });
                    return Math.max.apply(Math, nrs);
                };
                PlanService.prototype.getMinId = function () {
                    var nrs = this.getPlaeneBeschreibung().map(function (description) {
                        return description.id;
                    });
                    return Math.min.apply(Math, nrs);
                };
                PlanService.prototype.initLocalStorage = function () {
                    var _this = this;
                    var planVorlagen = [];
                    planVorlagen[0] = { "id": 1, "raum": "K34", "gruppe": "5d", "start": "Anfang", "stop": "Ende", "nr": 3, "tische": [{ "id": 1001, "i": 9, "j": 5, "sus_id": 0, "belegbar": true, "typ": 0 }, { "id": 1002, "i": 9, "j": 3, "sus_id": 0, "belegbar": false, "typ": 0 }, { "id": 1003, "i": 9, "j": 7, "sus_id": 0, "belegbar": true, "typ": 0 }, { "id": 61, "i": 6, "j": 1, "sus_id": 115, "belegbar": true, "typ": 0 }, { "id": 62, "i": 5, "j": 1, "sus_id": 121, "belegbar": true, "typ": 0 }, { "id": 63, "i": 7, "j": 3, "sus_id": 131, "belegbar": true, "typ": 0 }, { "id": 68, "i": 1, "j": 1, "sus_id": 134, "belegbar": true, "typ": 0 }, { "id": 69, "i": 1, "j": 2, "sus_id": 130, "belegbar": true, "typ": 0 }, { "id": 70, "i": 1, "j": 3, "sus_id": 123, "belegbar": true, "typ": 0 }, { "id": 71, "i": 1, "j": 4, "sus_id": 129, "belegbar": true, "typ": 0 }, { "id": 72, "i": 1, "j": 5, "sus_id": 118, "belegbar": true, "typ": 0 }, { "id": 73, "i": 1, "j": 6, "sus_id": 112, "belegbar": true, "typ": 0 }, { "id": 74, "i": 7, "j": 6, "sus_id": 135, "belegbar": true, "typ": 0 }, { "id": 75, "i": 2, "j": 1, "sus_id": 132, "belegbar": true, "typ": 0 }, { "id": 76, "i": 5, "j": 3, "sus_id": 116, "belegbar": true, "typ": 0 }, { "id": 77, "i": 2, "j": 7, "sus_id": 113, "belegbar": true, "typ": 0 }, { "id": 78, "i": 5, "j": 5, "sus_id": 133, "belegbar": true, "typ": 0 }, { "id": 79, "i": 2, "j": 3, "sus_id": 136, "belegbar": true, "typ": 0 }, { "id": 80, "i": 6, "j": 7, "sus_id": 124, "belegbar": true, "typ": 0 }, { "id": 81, "i": 7, "j": 5, "sus_id": 119, "belegbar": true, "typ": 0 }, { "id": 82, "i": 6, "j": 3, "sus_id": 117, "belegbar": true, "typ": 0 }, { "id": 83, "i": 3, "j": 1, "sus_id": 128, "belegbar": true, "typ": 0 }, { "id": 84, "i": 3, "j": 3, "sus_id": 114, "belegbar": true, "typ": 0 }, { "id": 85, "i": 5, "j": 7, "sus_id": 127, "belegbar": true, "typ": 0 }, { "id": 86, "i": 6, "j": 5, "sus_id": 111, "belegbar": true, "typ": 0 }, { "id": 87, "i": 7, "j": 7, "sus_id": 126, "belegbar": true, "typ": 0 }, { "id": 88, "i": 7, "j": 4, "sus_id": 120, "belegbar": true, "typ": 0 }, { "id": 89, "i": 7, "j": 2, "sus_id": 125, "belegbar": true, "typ": 0 }, { "id": 90, "i": 7, "j": 1, "sus_id": 122, "belegbar": true, "typ": 0 }, { "id": 121, "i": 3, "j": 5, "sus_id": 167, "belegbar": true, "typ": 0 }, { "id": 123, "i": 2, "j": 5, "sus_id": 169, "belegbar": true, "typ": 0 }, { "id": 124, "i": 1, "j": 7, "sus_id": 170, "belegbar": true, "typ": 0 }], "sus": [{ "id": 123, "name": "Alyssa", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 113, "name": "Anna B.", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 170, "name": "Anna Z.", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 130, "name": "Benedikt", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 114, "name": "Chiara", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 135, "name": "David", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 115, "name": "Emily", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 121, "name": "Franziska", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 120, "name": "Hanna", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 169, "name": "Jens-Philip", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 167, "name": "Johannes", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 134, "name": "Karolina", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 111, "name": "Katrin", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 125, "name": "Leon", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 119, "name": "Lotta", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 116, "name": "Luca", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 117, "name": "Luke", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 127, "name": "Maja", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 112, "name": "Marvin", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 132, "name": "Mathilde", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 136, "name": "Nina", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 122, "name": "Paul H.", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 131, "name": "Paul P.", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 133, "name": "Pina", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 124, "name": "Sandro", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 126, "name": "Sarah", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 118, "name": "Till", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 128, "name": "Y. Moehring", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 129, "name": "Y. Mueller", "nachname": "", "archiv": 0, "punkte": 0 }] };
                    planVorlagen[1] = { "id": 2, "raum": "PHR", "gruppe": "5d", "start": "Anfang", "stop": "Ende", "nr": 7, "tische": [{ "id": 1001, "i": 9, "j": 5, "sus_id": 0, "belegbar": true, "typ": 0 }, { "id": 1002, "i": 9, "j": 3, "sus_id": 0, "belegbar": false, "typ": 0 }, { "id": 1003, "i": 9, "j": 7, "sus_id": 0, "belegbar": true, "typ": 0 }, { "id": 61, "i": 6, "j": 1, "sus_id": 115, "belegbar": true, "typ": 0 }, { "id": 62, "i": 5, "j": 1, "sus_id": 121, "belegbar": true, "typ": 0 }, { "id": 63, "i": 7, "j": 3, "sus_id": 131, "belegbar": true, "typ": 0 }, { "id": 68, "i": 1, "j": 1, "sus_id": 134, "belegbar": true, "typ": 0 }, { "id": 69, "i": 1, "j": 2, "sus_id": 130, "belegbar": true, "typ": 0 }, { "id": 70, "i": 1, "j": 3, "sus_id": 123, "belegbar": true, "typ": 0 }, { "id": 71, "i": 1, "j": 4, "sus_id": 129, "belegbar": true, "typ": 0 }, { "id": 72, "i": 1, "j": 5, "sus_id": 118, "belegbar": true, "typ": 0 }, { "id": 73, "i": 1, "j": 6, "sus_id": 112, "belegbar": true, "typ": 0 }, { "id": 74, "i": 7, "j": 6, "sus_id": 135, "belegbar": true, "typ": 0 }, { "id": 75, "i": 2, "j": 1, "sus_id": 132, "belegbar": true, "typ": 0 }, { "id": 76, "i": 5, "j": 3, "sus_id": 116, "belegbar": true, "typ": 0 }, { "id": 77, "i": 2, "j": 7, "sus_id": 113, "belegbar": true, "typ": 0 }, { "id": 78, "i": 5, "j": 5, "sus_id": 133, "belegbar": true, "typ": 0 }, { "id": 79, "i": 2, "j": 3, "sus_id": 136, "belegbar": true, "typ": 0 }, { "id": 80, "i": 6, "j": 7, "sus_id": 124, "belegbar": true, "typ": 0 }, { "id": 81, "i": 7, "j": 5, "sus_id": 119, "belegbar": true, "typ": 0 }, { "id": 82, "i": 6, "j": 3, "sus_id": 117, "belegbar": true, "typ": 0 }, { "id": 83, "i": 3, "j": 1, "sus_id": 128, "belegbar": true, "typ": 0 }, { "id": 84, "i": 3, "j": 3, "sus_id": 114, "belegbar": true, "typ": 0 }, { "id": 85, "i": 5, "j": 7, "sus_id": 127, "belegbar": true, "typ": 0 }, { "id": 86, "i": 6, "j": 5, "sus_id": 111, "belegbar": true, "typ": 0 }, { "id": 87, "i": 7, "j": 7, "sus_id": 126, "belegbar": true, "typ": 0 }, { "id": 88, "i": 7, "j": 4, "sus_id": 120, "belegbar": true, "typ": 0 }, { "id": 89, "i": 7, "j": 2, "sus_id": 125, "belegbar": true, "typ": 0 }, { "id": 90, "i": 7, "j": 1, "sus_id": 122, "belegbar": true, "typ": 0 }, { "id": 121, "i": 3, "j": 5, "sus_id": 167, "belegbar": true, "typ": 0 }, { "id": 123, "i": 2, "j": 5, "sus_id": 169, "belegbar": true, "typ": 0 }, { "id": 124, "i": 1, "j": 7, "sus_id": 170, "belegbar": true, "typ": 0 }], "sus": [{ "id": 123, "name": "Alyssa", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 113, "name": "Anna B.", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 170, "name": "Anna Z.", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 130, "name": "Benedikt", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 114, "name": "Chiara", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 135, "name": "David", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 115, "name": "Emily", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 121, "name": "Franziska", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 120, "name": "Hanna", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 169, "name": "Jens-Philip", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 167, "name": "Johannes", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 134, "name": "Karolina", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 111, "name": "Katrin", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 125, "name": "Leon", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 119, "name": "Lotta", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 116, "name": "Luca", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 117, "name": "Luke", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 127, "name": "Maja", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 112, "name": "Marvin", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 132, "name": "Mathilde", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 136, "name": "Nina", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 122, "name": "Paul H.", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 131, "name": "Paul P.", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 133, "name": "Pina", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 124, "name": "Sandro", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 126, "name": "Sarah", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 118, "name": "Till", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 128, "name": "Y. Moehring", "nachname": "", "archiv": 0, "punkte": 0 }, { "id": 129, "name": "Y. Mueller", "nachname": "", "archiv": 0, "punkte": 0 }] };
                    planVorlagen.map(function (v) { return _this.savePlanVorlage(v); });
                };
                PlanService.prototype.savePlanVorlage = function (iPlan) {
                    var key = "plan" + iPlan.id;
                    window.localStorage
                        .setItem(key, JSON.stringify(iPlan));
                };
                PlanService.prototype.readPlan = function (id) {
                    var key = "plan" + id;
                    var jsonString = window.localStorage
                        .getItem(key);
                    var planVorlage = JSON.parse(jsonString);
                    return new plan_1.Plan(planVorlage);
                };
                PlanService.prototype.getPlanCopy = function (plan) {
                    var vorlage = plan.createVorlage();
                    // Negativer Index, damit sie beim speichern als neu erkannt werden
                    vorlage.tische.forEach(function (t) { return t.id = -1; });
                    vorlage.id = this.getNewPlanId();
                    vorlage.nr = this.getNewPlanNr();
                    //TODO id und nr
                    return new plan_1.Plan(vorlage);
                };
                PlanService.prototype.getNewPlan = function (sus) {
                    var plan_id = this.getNewPlanId();
                    var anzahlTische = sus.length;
                    var planVorlage = plan_1.Plan.createNewVorlage(anzahlTische);
                    planVorlage.sus = sus.map(function (sus) { return sus.susData; });
                    var plan = new plan_1.Plan(planVorlage);
                    var pa = new plan_anordnung_1.PlanAnordnung({ tische: plan.tische });
                    var pm = new plan_manager_1.PlanManager(plan);
                    pa.setzeU();
                    pm.losen();
                    return plan;
                };
                ;
                PlanService.prototype.getNewPlanNr = function () {
                    return this.getMaxNr() + 1;
                };
                PlanService.prototype.getNewPlanId = function () {
                    return Math.min(this.getMinId() - 1, -1);
                };
                PlanService.prototype.description = function (data) {
                    return { "id": data.id, "nr": data.nr, "text": data.gruppe + " Plan Nr." + data.nr + "/id: " + data.id };
                };
                PlanService.prototype.updatePlan = function (plan) {
                    this.savePlanVorlage(plan.createVorlage());
                    // console.log(plan.createVorlage());
                };
                PlanService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PlanService);
                return PlanService;
            }());
            exports_1("PlanService", PlanService);
        }
    }
});
//# sourceMappingURL=plan.service.js.map