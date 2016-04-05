/**
 * Created by Michael on 01.04.2016.
 */

import {Component} from "angular2/core";
import {PlanService} from "../plan.service";
import {PlanComponent} from "./plan.component";
import {Plan} from "../Pojo/plan";
import {IPlan} from "../Pojo/i_plan";
import {Sus} from "../Pojo/sus";
@Component({
    selector: 'plan-inout',
    template: `<div>
            <textarea [(ngModel)]="austausch"></textarea>
            <button (click)="importClick()">Import</button>
            <button (click)="exportClick()">Export</button>
            <button (click)="saveClick()">Speichern</button>
            <button (click)="copyClick()">PlanCopy</button>
            <button (click)="newClick()">Neuer Plan</button>
        </div>
    `,
    directives: [],
    providers: [PlanService],
    inputs: ['planComponent', 'plan']
})

export class PlanInout {
    public planComponent:PlanComponent;
    public plan:Plan;
    private planService:PlanService;
    private austausch:string;

    constructor(planservice:PlanService) {
        this.planService = planservice;
    }

    public saveClick() {
        this.planService.updatePlan(this.plan);
    }

    public copyClick() {
        this.planComponent.setPlan(this.planService.getPlanCopy(this.plan));
    }
    public newClick() {
        let sus:Sus[] = this.plan.getSusList();
        let plan:Plan = this.planService.getNewPlan(sus);
        this.planComponent.setPlan(plan);
    }
;
    public importClick() {
        let planVorlage:IPlan = JSON.parse(this.austausch);
        this.planComponent.setPlan(new Plan(planVorlage));

    }

    public exportClick() {
        this.austausch = this.plan.getJSON();
    }
}