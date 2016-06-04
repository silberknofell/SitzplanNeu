/**
 * Created by Michael on 01.04.2016.
 */

import {Component} from "@angular/core";
import {PlanService} from "../services/plan.service";
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
        </div>
    `,
    directives: [],
    providers: [],
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

    public copyClick() {
        // this.planComponent.plan=this.planService.getPlanCopy(this.plan);
    }

    public importClick() {
        let planVorlage:IPlan = JSON.parse(this.austausch);
        // this.planComponent.plan=new Plan(planVorlage);
    }

    public exportClick() {
        this.austausch = this.plan.getJSON();
    }
}