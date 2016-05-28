/**
 * Created by Michael on 01.04.2016.
 */
/**
 * Created by test on 28.02.2016.
 */
import {Component, Input} from '@angular/core';

import {PlanComponent} from "./plan.component";
import {IPlanBeschreibung} from "../Pojo/i_plan";
import {PlanService} from "../services/plan.service";
import {Gruppe} from "../Pojo/gruppe";
import {Plan} from "../Pojo/plan";
import {Sus} from "../Pojo/sus";
import {PlanInout} from "./plan-inout.component";
import {GroupsService} from "../services/groups.service";
import {SusService} from "../services/sus.service";

@Component({
    selector: 'plan-select',
    template: `<div id="plan-select">
<select [(ngModel)] = "selectedDescription">
    <option *ngFor = "let description of plaeneBeschreibungen"
            [ngValue] = "description"
            >
    {{description.text}}
    </option>
</select>

<plan [plan]="_plan"></plan>
</div>
<div>
    <plan-inout [plan] = "_plan"></plan-inout>
</div>
<button (click)="newClick()">Neuer Plan</button>
    `,
    styles: [`
        select {
            font-size: 30px;
        }
    `],
    directives: [PlanComponent, PlanInout],
    providers: [PlanService, SusService]
})

export class PlanSelectComponent {
    private _gruppe:Gruppe;
    private _plan:Plan;

    @Input()
    get gruppe():Gruppe {
        return this._gruppe;
    }

    set gruppe(value:Gruppe) {
        this._gruppe = value;
        this.getPlaeneBeschreibung();
    }

    get selectedDescription() {
        if (this.plaeneBeschreibungen.length >0) {
            return this.plaeneBeschreibungen[0];
        }
        return null;
    }

    set selectedDescription(value:IPlanBeschreibung) {
        this.planService.readPlan(value.id)
            .subscribe(plan => this._plan = plan);
    }

    plaeneBeschreibungen:IPlanBeschreibung[] = [];

    constructor(private planService:PlanService, private susService: SusService) {
        this.planService = planService;
    }


    public newClick() {
        this.susService.getSusInGruppe(this.gruppe.id)
            .subscribe(sus => this.newPlan(sus));

    }

    private newPlan(sus:Sus[]) {
        this._plan = this.planService.getNewPlan(sus);
        this._plan.nr = this.getMaxPlanNr() +1;
        this._plan.gruppe = this._gruppe;
    }

    private getMaxPlanNr() {
        let nummern:number[] = this.plaeneBeschreibungen
            .map(plan => plan.nr);
        if (nummern.length > 0) {
            return Math.max.apply(null, nummern);
        }
        return 1;
    }
    public getPlaeneBeschreibung() {
        if (this._gruppe) {
            this.planService.getPlaeneBeschreibung(this._gruppe.id)
                .subscribe(b => {
                    this.plaeneBeschreibungen = b;
                })
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