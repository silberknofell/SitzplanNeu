/**
 * Created by Michael on 06.06.2016.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";
import {PlanAnordnung} from "../plan-anordnung";
import {Plan} from "../Pojo/plan";
@Component({
    selector: 'gruppen-erstellen',
    template: `
    <button     class="btn btn-primary btn-space"  
                (click)="gruppenClick()">
                {{anzahlListe.gruppenAnzahl()}} Gruppen
    </button>

    
    
    
    `
})

export class GruppenErstellenComponent {
    anzahlListe:AnzahlListe;
    planAnordnung:PlanAnordnung;
    private _plan:Plan;
    @Input()
    set plan(value:Plan) {
        this._plan = value;
        this.planAnordnung =
            new PlanAnordnung({tische: this._plan.tische, blockBreite: 3});
        this.anzahlListe = new AnzahlListe(this._plan.tische.length);
    }

    @Output() onPlanChange = new EventEmitter<Plan>();

    constructor() {
    }

    gruppenClick():void {
        this.planAnordnung.setzeGruppen({anzahlGruppen: this.anzahlListe.next()});
        this.onPlanChange.emit(this._plan);
    }
}

class AnzahlListe {
    liste:number[];
    pointer:number;

    constructor(n:number) {
        this.fillListe(n);
        this.reset();
    }

    reset() {
        this.pointer = 0;
    }

    next():number {
        let value = this.pointer;
        this.pointer++;
        if (this.pointer >= this.liste.length) {
            this.pointer = 0;
        }
        return this.gruppenAnzahl();
    }

    gruppenAnzahl():number {
        return this.liste[this.pointer];
    }

    fillListe(n:number) {
        this.liste=[];
        for (let i=2; i*i<n; i++) {
            this.liste.push(i);
            this.liste.push(Math.round(n/i));
        }
        this.liste = this.liste.sort().filter(function(item, pos, ary) {
            return !pos || item != ary[pos - 1];
        })
    }
}