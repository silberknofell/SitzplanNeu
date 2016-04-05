/**
 * Created by Michael on 01.04.2016.
 */
/**
 * Created by test on 28.02.2016.
 */
import {Component} from 'angular2/core';

import {PlanComponent} from "./plan.component";
import {IPlanBeschreibung} from "../Pojo/i_plan";
import {PlanService} from "../plan.service";

@Component({
    selector: 'plan-select',
    template: `<div id="plan-select">
<ul>
    <li *ngFor="#description of getPlaeneBeschreibung()"
        [ngClass] = "getCssClass()"
        (click)="beschreibungClick(description)">
        {{description.text}}
    </li>
</ul>
</div>
    `,
    directives: [],
    providers: [PlanService],
    inputs: ['planComponent']
})

export class PlanSelectComponent {
    public planComponent:PlanComponent;
    private planService:PlanService;

    constructor( planService:PlanService) {
        this.planService = planService;
    }


    public beschreibungClick(description:IPlanBeschreibung) {
        let id:number = description.id;
        this.planComponent.setPlan(this.planService.readPlan(id));
    }


    public getPlaeneBeschreibung() {
        return this.planService.getPlaeneBeschreibung();
    }

    public getCssClass():string {
        var classes:string = "";
        //TODO
        // if (this.isMarkiert()) {
        //     classes += " markiert";
        // }
        return classes;
    }
}