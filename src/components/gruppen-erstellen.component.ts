/**
 * Created by Michael on 06.06.2016.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";
import {PlanAnordnung} from "../plan-anordnung";
import {Plan} from "../Pojo/plan";
import {ModalGetAnzahlGruppen} from "./modal-get-anzahl-gruppen.component";
@Component({
    selector: 'gruppen-erstellen',
    template: `
    <button     class="btn btn-primary btn-space"  
                (click)="gruppenClick()">
                Gruppen
    </button>
    <modal-get-anzahl-gruppen 
        *ngIf="selectAnzahlMode" 
        [anzahlListe]="anzahlListe"
        (onClose)="onDialogClose($event)"
        >MODAHL</modal-get-anzahl-gruppen>
    
    
    
    `,
    directives: [ModalGetAnzahlGruppen]
})

export class GruppenErstellenComponent {
    planAnordnung:PlanAnordnung;
    selectAnzahlMode:boolean;
    anzahlListe:AnzahlListe;
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
        this.selectAnzahlMode = false;
    }

    gruppenClick():void {
        this.selectAnzahlMode = true;
    }
    
    getListe():number[] {
        if (this.anzahlListe) {
            return this.anzahlListe.liste;
        }
        return [];
    }

    onDialogClose(n:number) {
        this.selectAnzahlMode = false;
        if (n > 2) {
            this.planAnordnung.setzeGruppen({anzahlGruppen: n});
            this.onPlanChange.emit(this._plan);
        }
    }
}

export class AnzahlListe {
    private _liste:number[];
    private _anzahlSus;
    get liste():number[] {
        return this._liste;
    }
    get anzahlSus():number {
        return this._anzahlSus;
    }
    pointer:number;

    constructor(anzahlSus:number) {
        this._anzahlSus = anzahlSus;
        this.fillListe(anzahlSus);
        this.reset();
    }

    reset() {
        this.pointer = 0;
    }

    next():number {
        let value = this.pointer;
        this.pointer++;
        if (this.pointer >= this._liste.length) {
            this.pointer = 0;
        }
        return this.gruppenAnzahl();
    }

    gruppenAnzahl():number {
        return this._liste[this.pointer];
    }

    private fillListe(n:number) {
        this._liste = [];
        for (let i = 2; i * i < n; i++) {
            this._liste.push(i);
            this._liste.push(Math.round(n / i));
        }
        this._liste = this._liste.sort().filter(function (item, pos, ary) {
            return !pos || item != ary[pos - 1];
        })
    }
}