/**
 * Created by Michael on 01.04.2016.
 */
/**
 * Created by test on 28.02.2016.
 */
import {Component, Input} from 'angular2/core';

import {PlanComponent} from "./plan.component";
import {IPlanBeschreibung} from "../Pojo/i_plan";
import {PlanService} from "../services/plan.service";
import {Gruppe} from "../Pojo/gruppe";
import {Plan} from "../Pojo/plan";
import {Sus} from "../Pojo/sus";

@Component({
    selector: 'plan-select',
    template: `<div id="plan-select">
<h1>PlanSelect</h1>
<ul>
    <li *ngFor="#description of plaeneBeschreibungen"
        [ngClass] = "getCssClass()"
        (click)="beschreibungClick(description)">
        {{description.text}}
    </li>
</ul>
</div>
<button (click)="newClick()">Neuer Plan</button>
    `,
    directives: [],
    providers: []
})

export class PlanSelectComponent {
    @Input() planComponent:PlanComponent;
    private _gruppe:Gruppe;
    @Input()
    get gruppe():Gruppe {
        return this._gruppe;
    }

    set gruppe(value:Gruppe) {
        this._gruppe = value;
        this.getPlaeneBeschreibung();
    }

    planService:PlanService;
    plaeneBeschreibungen:IPlanBeschreibung[] = [];
    
    constructor(planService:PlanService) {
        this.planService = planService;
    }

    public beschreibungClick(description:IPlanBeschreibung) {
        let id:number = description.id;
        this.planService.readPlan(id);           
    }
    public newClick() {
        let sus:Sus[] ;
        let plan:Plan = this.planService.getNewPlan(sus);
    }

    public getPlaeneBeschreibung() {
        if (this._gruppe) {
           this.planService.getPlaeneBeschreibung(this._gruppe.id)
                .subscribe(b => this.plaeneBeschreibungen=b);
        }
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