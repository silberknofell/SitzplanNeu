/**
 * Created by test on 29.12.2015.
 */
/**
 * Created by test on 28.12.2015.
 */
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Plan} from "./Pojo/plan";
import {IPlan, IPlanMetadata, IPlanBeschreibung} from "./Pojo/i_plan";
import {Sus} from "./Pojo/sus";
import {PlanAnordnung} from "./plan-anordnung";
import {PlanManager} from "./plan-manager";
import {Observable} from "rxjs/Observable";


@Injectable()
export class PlanService {
    private baseUrl:string = 'http://geihe.net/sitzplan2/rest/';
    private http:Http;
    private _callbackNewPlan: (plan:Plan) => void;
    set callbackNewPlan(value:(plan:Plan)=>void) {
        this._callbackNewPlan = value;
    }

    constructor(http:Http) {
        this.http = http;
    }

    getPlaeneBeschreibung(gruppe_id:number):Observable<IPlanBeschreibung[]> {
        let url = this.baseUrl + 'plaene/' + gruppe_id;
        return this.http.get(url)
            .map(this.extractPlanBeschreibung)
            .catch(this.handleError);
    }

    private extractPlanBeschreibung(res:Response) {
        return res.json().map(vorlage => {
            return {
                id: vorlage.id,
                nr: vorlage.nr,
                text: vorlage.gruppe + " " + vorlage.raum + "(" + vorlage.nr + ")"
            }
        });
    }

    private handleError(error:any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        //console.error(errMsg); // log to console instead

        return Observable.throw(errMsg);
    }

    private getMaxNr():number {
        // let nrs:number[] = this.getPlaeneBeschreibungLocal()
        //     .map(description=> {
        //             return description.nr
        //         }
        //     );
        // return Math.max.apply(Math, nrs);
        return 99;
    }

    public savePlanVorlage(iPlan:IPlan) {
        let key:string = "_plan" + iPlan.id;
        window.localStorage
            .setItem(key, JSON.stringify(iPlan));
    }

    public readPlan(plan_id:number):void{
        let url = this.baseUrl + 'plan/' + plan_id;
        this.http.get(url)
            .map(this.extractPlan)
            .catch(this.handleError)
            .subscribe(plan => {
                if (this._callbackNewPlan) this._callbackNewPlan(plan);
            });
    }

    private extractPlan(res:Response):Plan {
        let planVorlage = res.json();
        planVorlage.extras = JSON.parse(planVorlage.extras);
        return new Plan(planVorlage);
    }

    public getPlanCopy(plan:Plan):Plan {
        let vorlage:IPlan = plan.createVorlage();
        vorlage.id = 0;
        vorlage.nr = this.getNewPlanNr();
        //TODO id und nr
        return new Plan(vorlage);
    }

    public getNewPlan(sus:Sus[]) {
        let plan_id:number = 0;
        let anzahlTische:number = sus.length;
        let planVorlage:IPlan = Plan.createNewVorlage(anzahlTische);
        let plan:Plan = new Plan(planVorlage);
        let pa:PlanAnordnung = new PlanAnordnung({tische: plan.tische});
        let pm:PlanManager = new PlanManager(plan);
        pa.setzeU();
        pm.losen();
        return plan;
    };

    private getNewPlanNr():number {
        return this.getMaxNr() + 1;
    }

    updatePlan(plan:Plan) {
        this.savePlanVorlage(plan.createVorlage());
    }

}