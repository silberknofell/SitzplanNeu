/**
 * Created by test on 29.12.2015.
 */
/**
 * Created by test on 28.12.2015.
 */
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Plan} from "./Pojo/plan";
import {IPlan, IPlanMetadata, IPlanBeschreibung} from "./Pojo/i_plan";
import {Sus} from "./Pojo/sus";
import {PlanAnordnung} from "./plan-anordnung";
import {PlanManager} from "./plan-manager";


@Injectable()
export class PlanService {
    private gruppeId;

    constructor(http:Http) {

    }

    public setGruppeId(gruppeId: number) {
        this.gruppeId = gruppeId;
        this.initLocalStorage();
    }

    public getPlaeneBeschreibung():IPlanBeschreibung[] {
        let keys:string[] = Object.keys(localStorage);
        return keys.map(key=> {
            let item = window.localStorage.getItem(key);
            let pv:IPlan = JSON.parse(item);
            return this.description(pv);
        });
    }

    private getMaxNr():number {
        let nrs:number[]=this.getPlaeneBeschreibung()
                    .map(description=> {
                    return description.nr}
        );
        return Math.max.apply(Math, nrs);
    }

    private getMinId():number {
        let nrs:number[]=this.getPlaeneBeschreibung().map(description=> {
            return description.id});

        return Math.min.apply(Math, nrs);
    }


    private initLocalStorage() {
        var planVorlagen:IPlan[] = [];
        planVorlagen[0] =  {"id":1,"raum":"K34","gruppe":"5d","start":"Anfang","stop":"Ende","nr":3,"tische":[{"id":1001,"i":9,"j":5,"sus_id":0,"belegbar":true,"typ":0 },{"id":1002,"i":9,"j":3,"sus_id":0,"belegbar":false,"typ":0 },{"id":1003,"i":9,"j":7,"sus_id":0,"belegbar":true,"typ":0 },{"id":61,"i":6,"j":1,"sus_id":115,"belegbar":true,"typ":0 },{"id":62,"i":5,"j":1,"sus_id":121,"belegbar":true,"typ":0 },{"id":63,"i":7,"j":3,"sus_id":131,"belegbar":true,"typ":0 },{"id":68,"i":1,"j":1,"sus_id":134,"belegbar":true,"typ":0 },{"id":69,"i":1,"j":2,"sus_id":130,"belegbar":true,"typ":0 },{"id":70,"i":1,"j":3,"sus_id":123,"belegbar":true,"typ":0 },{"id":71,"i":1,"j":4,"sus_id":129,"belegbar":true,"typ":0 },{"id":72,"i":1,"j":5,"sus_id":118,"belegbar":true,"typ":0 },{"id":73,"i":1,"j":6,"sus_id":112,"belegbar":true,"typ":0 },{"id":74,"i":7,"j":6,"sus_id":135,"belegbar":true,"typ":0 },{"id":75,"i":2,"j":1,"sus_id":132,"belegbar":true,"typ":0 },{"id":76,"i":5,"j":3,"sus_id":116,"belegbar":true,"typ":0 },{"id":77,"i":2,"j":7,"sus_id":113,"belegbar":true,"typ":0 },{"id":78,"i":5,"j":5,"sus_id":133,"belegbar":true,"typ":0 },{"id":79,"i":2,"j":3,"sus_id":136,"belegbar":true,"typ":0 },{"id":80,"i":6,"j":7,"sus_id":124,"belegbar":true,"typ":0 },{"id":81,"i":7,"j":5,"sus_id":119,"belegbar":true,"typ":0 },{"id":82,"i":6,"j":3,"sus_id":117,"belegbar":true,"typ":0 },{"id":83,"i":3,"j":1,"sus_id":128,"belegbar":true,"typ":0 },{"id":84,"i":3,"j":3,"sus_id":114,"belegbar":true,"typ":0 },{"id":85,"i":5,"j":7,"sus_id":127,"belegbar":true,"typ":0 },{"id":86,"i":6,"j":5,"sus_id":111,"belegbar":true,"typ":0 },{"id":87,"i":7,"j":7,"sus_id":126,"belegbar":true,"typ":0 },{"id":88,"i":7,"j":4,"sus_id":120,"belegbar":true,"typ":0 },{"id":89,"i":7,"j":2,"sus_id":125,"belegbar":true,"typ":0 },{"id":90,"i":7,"j":1,"sus_id":122,"belegbar":true,"typ":0 },{"id":121,"i":3,"j":5,"sus_id":167,"belegbar":true,"typ":0 },{"id":123,"i":2,"j":5,"sus_id":169,"belegbar":true,"typ":0 },{"id":124,"i":1,"j":7,"sus_id":170,"belegbar":true,"typ":0 }],"sus":[{"id":123,"name":"Alyssa","nachname":"","archiv":0,"punkte":0 },{"id":113,"name":"Anna B.","nachname":"","archiv":0,"punkte":0 },{"id":170,"name":"Anna Z.","nachname":"","archiv":0,"punkte":0 },{"id":130,"name":"Benedikt","nachname":"","archiv":0,"punkte":0 },{"id":114,"name":"Chiara","nachname":"","archiv":0,"punkte":0 },{"id":135,"name":"David","nachname":"","archiv":0,"punkte":0 },{"id":115,"name":"Emily","nachname":"","archiv":0,"punkte":0 },{"id":121,"name":"Franziska","nachname":"","archiv":0,"punkte":0 },{"id":120,"name":"Hanna","nachname":"","archiv":0,"punkte":0 },{"id":169,"name":"Jens-Philip","nachname":"","archiv":0,"punkte":0 },{"id":167,"name":"Johannes","nachname":"","archiv":0,"punkte":0 },{"id":134,"name":"Karolina","nachname":"","archiv":0,"punkte":0 },{"id":111,"name":"Katrin","nachname":"","archiv":0,"punkte":0 },{"id":125,"name":"Leon","nachname":"","archiv":0,"punkte":0 },{"id":119,"name":"Lotta","nachname":"","archiv":0,"punkte":0 },{"id":116,"name":"Luca","nachname":"","archiv":0,"punkte":0 },{"id":117,"name":"Luke","nachname":"","archiv":0,"punkte":0 },{"id":127,"name":"Maja","nachname":"","archiv":0,"punkte":0 },{"id":112,"name":"Marvin","nachname":"","archiv":0,"punkte":0 },{"id":132,"name":"Mathilde","nachname":"","archiv":0,"punkte":0 },{"id":136,"name":"Nina","nachname":"","archiv":0,"punkte":0 },{"id":122,"name":"Paul H.","nachname":"","archiv":0,"punkte":0 },{"id":131,"name":"Paul P.","nachname":"","archiv":0,"punkte":0 },{"id":133,"name":"Pina","nachname":"","archiv":0,"punkte":0 },{"id":124,"name":"Sandro","nachname":"","archiv":0,"punkte":0 },{"id":126,"name":"Sarah","nachname":"","archiv":0,"punkte":0 },{"id":118,"name":"Till","nachname":"","archiv":0,"punkte":0 },{"id":128,"name":"Y. Moehring","nachname":"","archiv":0,"punkte":0 },{"id":129,"name":"Y. Mueller","nachname":"","archiv":0,"punkte":0 }]};
        planVorlagen[1] =  {"id":2,"raum":"PHR","gruppe":"5d","start":"Anfang","stop":"Ende","nr":7,"tische":[{"id":1001,"i":9,"j":5,"sus_id":0,"belegbar":true,"typ":0 },{"id":1002,"i":9,"j":3,"sus_id":0,"belegbar":false,"typ":0 },{"id":1003,"i":9,"j":7,"sus_id":0,"belegbar":true,"typ":0 },{"id":61,"i":6,"j":1,"sus_id":115,"belegbar":true,"typ":0 },{"id":62,"i":5,"j":1,"sus_id":121,"belegbar":true,"typ":0 },{"id":63,"i":7,"j":3,"sus_id":131,"belegbar":true,"typ":0 },{"id":68,"i":1,"j":1,"sus_id":134,"belegbar":true,"typ":0 },{"id":69,"i":1,"j":2,"sus_id":130,"belegbar":true,"typ":0 },{"id":70,"i":1,"j":3,"sus_id":123,"belegbar":true,"typ":0 },{"id":71,"i":1,"j":4,"sus_id":129,"belegbar":true,"typ":0 },{"id":72,"i":1,"j":5,"sus_id":118,"belegbar":true,"typ":0 },{"id":73,"i":1,"j":6,"sus_id":112,"belegbar":true,"typ":0 },{"id":74,"i":7,"j":6,"sus_id":135,"belegbar":true,"typ":0 },{"id":75,"i":2,"j":1,"sus_id":132,"belegbar":true,"typ":0 },{"id":76,"i":5,"j":3,"sus_id":116,"belegbar":true,"typ":0 },{"id":77,"i":2,"j":7,"sus_id":113,"belegbar":true,"typ":0 },{"id":78,"i":5,"j":5,"sus_id":133,"belegbar":true,"typ":0 },{"id":79,"i":2,"j":3,"sus_id":136,"belegbar":true,"typ":0 },{"id":80,"i":6,"j":7,"sus_id":124,"belegbar":true,"typ":0 },{"id":81,"i":7,"j":5,"sus_id":119,"belegbar":true,"typ":0 },{"id":82,"i":6,"j":3,"sus_id":117,"belegbar":true,"typ":0 },{"id":83,"i":3,"j":1,"sus_id":128,"belegbar":true,"typ":0 },{"id":84,"i":3,"j":3,"sus_id":114,"belegbar":true,"typ":0 },{"id":85,"i":5,"j":7,"sus_id":127,"belegbar":true,"typ":0 },{"id":86,"i":6,"j":5,"sus_id":111,"belegbar":true,"typ":0 },{"id":87,"i":7,"j":7,"sus_id":126,"belegbar":true,"typ":0 },{"id":88,"i":7,"j":4,"sus_id":120,"belegbar":true,"typ":0 },{"id":89,"i":7,"j":2,"sus_id":125,"belegbar":true,"typ":0 },{"id":90,"i":7,"j":1,"sus_id":122,"belegbar":true,"typ":0 },{"id":121,"i":3,"j":5,"sus_id":167,"belegbar":true,"typ":0 },{"id":123,"i":2,"j":5,"sus_id":169,"belegbar":true,"typ":0 },{"id":124,"i":1,"j":7,"sus_id":170,"belegbar":true,"typ":0 }],"sus":[{"id":123,"name":"Alyssa","nachname":"","archiv":0,"punkte":0 },{"id":113,"name":"Anna B.","nachname":"","archiv":0,"punkte":0 },{"id":170,"name":"Anna Z.","nachname":"","archiv":0,"punkte":0 },{"id":130,"name":"Benedikt","nachname":"","archiv":0,"punkte":0 },{"id":114,"name":"Chiara","nachname":"","archiv":0,"punkte":0 },{"id":135,"name":"David","nachname":"","archiv":0,"punkte":0 },{"id":115,"name":"Emily","nachname":"","archiv":0,"punkte":0 },{"id":121,"name":"Franziska","nachname":"","archiv":0,"punkte":0 },{"id":120,"name":"Hanna","nachname":"","archiv":0,"punkte":0 },{"id":169,"name":"Jens-Philip","nachname":"","archiv":0,"punkte":0 },{"id":167,"name":"Johannes","nachname":"","archiv":0,"punkte":0 },{"id":134,"name":"Karolina","nachname":"","archiv":0,"punkte":0 },{"id":111,"name":"Katrin","nachname":"","archiv":0,"punkte":0 },{"id":125,"name":"Leon","nachname":"","archiv":0,"punkte":0 },{"id":119,"name":"Lotta","nachname":"","archiv":0,"punkte":0 },{"id":116,"name":"Luca","nachname":"","archiv":0,"punkte":0 },{"id":117,"name":"Luke","nachname":"","archiv":0,"punkte":0 },{"id":127,"name":"Maja","nachname":"","archiv":0,"punkte":0 },{"id":112,"name":"Marvin","nachname":"","archiv":0,"punkte":0 },{"id":132,"name":"Mathilde","nachname":"","archiv":0,"punkte":0 },{"id":136,"name":"Nina","nachname":"","archiv":0,"punkte":0 },{"id":122,"name":"Paul H.","nachname":"","archiv":0,"punkte":0 },{"id":131,"name":"Paul P.","nachname":"","archiv":0,"punkte":0 },{"id":133,"name":"Pina","nachname":"","archiv":0,"punkte":0 },{"id":124,"name":"Sandro","nachname":"","archiv":0,"punkte":0 },{"id":126,"name":"Sarah","nachname":"","archiv":0,"punkte":0 },{"id":118,"name":"Till","nachname":"","archiv":0,"punkte":0 },{"id":128,"name":"Y. Moehring","nachname":"","archiv":0,"punkte":0 },{"id":129,"name":"Y. Mueller","nachname":"","archiv":0,"punkte":0 }]};
        planVorlagen.map(v => this.savePlanVorlage(v));
    }

    public savePlanVorlage(iPlan:IPlan) {
        let key:string = "plan" + iPlan.id;
        window.localStorage
            .setItem(key, JSON.stringify(iPlan));
    }
    
    public readPlan(id:number):Plan {
        let key="plan" + id;
        let jsonString:string = window.localStorage
            .getItem(key);
        let planVorlage:IPlan= JSON.parse(jsonString);
        return new Plan(planVorlage);       
    }

    public getPlanCopy(plan:Plan):Plan {
        let vorlage:IPlan = plan.createVorlage();
        // Negativer Index, damit sie beim speichern als neu erkannt werden
        vorlage.tische.forEach(t=>t.id = -1);
        vorlage.id = this.getNewPlanId();
        vorlage.nr = this.getNewPlanNr();
        //TODO id und nr
        return new Plan(vorlage);        
    }

    public getNewPlan(sus:Sus[]) {
        let plan_id:number = this.getNewPlanId();
        let anzahlTische : number = sus.length;
        let planVorlage:IPlan = Plan.createNewVorlage(anzahlTische);
        planVorlage.sus = sus.map(sus=>sus.susData);
        let plan:Plan = new Plan(planVorlage);
        let pa:PlanAnordnung = new PlanAnordnung({tische: plan.tische});
        let pm:PlanManager = new PlanManager(plan);
        pa.setzeU();
        pm.losen();
        return plan;
    }

;
    private getNewPlanNr() : number {
        return this.getMaxNr()+1;
    }

    private getNewPlanId() : number {
        return Math.min(this.getMinId()-1, -1);
    }
    
    private description(data:IPlanMetadata):IPlanBeschreibung {
        return {"id": data.id, "nr": data.nr, "text": data.gruppe + " Plan Nr." + data.nr + "/id: " + data.id};
    }

    updatePlan(plan:Plan) {
        this.savePlanVorlage(plan.createVorlage());
        // console.log(plan.createVorlage());

    }

}