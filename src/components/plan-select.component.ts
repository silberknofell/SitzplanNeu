/**
 * Created by Michael on 01.04.2016.
 */
/**
 * Created by test on 28.02.2016.
 */
import {Component, Input, EventEmitter, Output} from "@angular/core";
import {IPlanBeschreibung} from "../Pojo/i_plan";
import {PlanService} from "../services/plan.service";
import {Gruppe} from "../Pojo/gruppe";
import {Plan} from "../Pojo/plan";
import {Sus} from "../Pojo/sus";
import {PlanInout} from "./plan-inout.component";
import {SusService} from "../services/sus.service";

@Component({
    selector: 'plan-select',
    template: `
<select [(ngModel)] = "selectedDescription" 
        *ngIf = "mindestensEinPlan()">
    <option *ngFor = "let description of plaeneBeschreibungen"
            [ngValue] = "description"
            >
    {{description.text}}
    </option>
</select>

<button class="btn btn-warning btn-space"(click)="newClick()">Neuer Plan</button>
    `,
    styles: [`
        select {font-size: 30px;}
        button {float: right;}
    `],
    directives: [PlanInout],
    providers: [PlanService, SusService]
})

export class PlanSelectComponent {
    private _gruppe:Gruppe;
    @Output() onNewPlanSelect = new EventEmitter<Plan>();

    get gruppe():Gruppe {
        return this._gruppe;
    }

    @Input()
    set gruppe(value:Gruppe) {
        this._gruppe = value;
        this.getPlaeneBeschreibung();
    }

    get selectedDescription():IPlanBeschreibung {
        if (this.mindestensEinPlan()) {
            return this.plaeneBeschreibungen[0];
        } else {
            return null;
        }
    }

    set selectedDescription(value:IPlanBeschreibung) {
        this.readPlan(value.id);
    }

    plaeneBeschreibungen:IPlanBeschreibung[] = [];

    constructor(private planService:PlanService, private susService:SusService) {
        this.planService = planService;
    }

    readPlan(planId:number) {
        this.planService.readPlan(planId)
            .subscribe(plan => this.onNewPlanSelect.emit(plan));
    }

    public newClick() {
        this.susService.getSusInGruppe(this.gruppe.id)
            .subscribe(sus => this.newPlan(sus));

    }

    private newPlan(sus:Sus[]) {
        let plan:Plan = this.planService.getNewPlan(sus);
        plan.nr = this.getMaxPlanNr() + 1;
        plan.gruppe = this._gruppe;
        this.onNewPlanSelect.emit(plan);
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
                .subscribe(beschreibung => {
                    this.plaeneBeschreibungen = beschreibung;
                    if (this.mindestensEinPlan()) {
                        this.selectedDescription = beschreibung[0];
                    }
                })
        }
    }

    private mindestensEinPlan():boolean {
        return this.plaeneBeschreibungen && this.plaeneBeschreibungen.length > 0;
    }
}