/**
 * Created by test on 31.12.2015.
 */
import {Component, Input} from "@angular/core";
import {Plan} from "./../Pojo/plan";
import {PlanService} from "../services/plan.service";
import {CellComponent} from "./cell.component";
import {Tisch} from "../Pojo/tisch";
import {Cell} from "../Pojo/cell";
import {PlanLayout} from "../plan-layout";
import {Markierung} from "../Pojo/markierung";
import {PlanManager} from "../plan-manager";
import {Elem} from "../Pojo/element";
import {LagerComponent} from "./lager.component";
import {PlanAnordnung} from "../plan-anordnung";
import {PlanInout} from "./plan-inout.component";

@Component({
    selector: 'plan',
    template: `<div *ngIf="plan">
<div id="start-stop">
    Von:
        <input type="text" id="start" [(ngModel)]="plan.start" placeholder="Start" />
    Bis:
        <input type="text" id="stop" [(ngModel)]="plan.stop" placeholder="Stop" />
</div>
    <div class="plan"
         [style.width.px]="right()"
         [style.height.px]="bottom()"
    >

        <cell *ngFor="let cell of cells"
              [cell]="cell"
              [planComponent]="getPlanComponent()"
        ></cell>

        <div id="unten" class="label"
             [style.top.px]="bottom()"
             [style.left.px]="xMitte()-xHalfCell()"
        >
        <input type="text" [(ngModel)]="plan.extras.unten" />
        

        </div>
        <div id="oben" class="label"
             [style.top.px]="-23"
             [style.left.px]="xMitte()-xHalfCell()"
        >
        <input type="text" [(ngModel)]="plan.extras.oben" />
        
        </div>
        <div id="links" class="label"
             [style.left.px]="-41"
             [style.top.px]="yMitte()"
        >
        <input type="text" [(ngModel)]="plan.extras.links" />
        
        </div>
        <div id="rechts" class="label"
             [style.left.px]="right()-26"
             [style.top.px]="yMitte()"
        >
            <input type="text" [(ngModel)]="plan.extras.rechts" />
        </div>

        <div class="arrows"
             [style.left.px]="right()"
             [style.top.px]="0"
        >
            <button (click)="deltaY(-50)"><span class="fa fa-arrow-up"></span></button>
            <button (click)="deltaY(50)"><span class="fa fa-arrow-down"></span></button>
            <button *ngIf="erweitert" (click)="deltaI(1)"><span class="fa fa-plus-square-o"></span></button>
            <button *ngIf="erweitert" (click)="deltaI(-1)"><span class="fa fa-minus-square-o"></span></button>
        </div>
        <div class="arrows"
             [style.left.px]="0"
             [style.top.px]="-23"
        >
            <button (click)="deltaX(-50)"><span class="fa fa-arrow-left"></span></button>
            <button (click)="deltaX(50)"><span class="fa fa-arrow-right"></span></button>
            <button *ngIf="erweitert" (click)="deltaJ(1)"><span class="fa fa-plus-square-o"></span></button>
            <button *ngIf="erweitert" (click)="deltaJ(-1)"><span class="fa fa-minus-square-o"></span></button>
        </div>

    </div>

    <button class="btn btn-default" *ngIf="erweitert" (click)="reihenClick()">Reihen</button>
    <button class="btn btn-default" *ngIf="erweitert" (click)="uClick()">U-Form</button>
    <button class="btn btn-default" (click)="losen()">losen</button>
    <button class="btn btn-default" (click)="erweitert = !erweitert">{{erweitert ? 'weniger' : 'mehr'}}</button>
    <lager *ngIf="erweitert"
           [planComponent]="getPlanComponent()"
    ></lager>
</div>
  
`,
    inputs: [],
    directives: [CellComponent, LagerComponent,
        PlanInout],
    providers: [],
    styles:  [
        `
input {
    text-align: center;
    border:none;
    margin: 0;
    font-size:120%;
    background-color: transparent;
}
        `]
})

export class PlanComponent {
    private _plan:Plan;
    @Input()
    set plan(plan:Plan) {
        this._plan = plan;
        if (plan) {
            PlanLayout.setIJ(this._plan);
            this.buildComponents();
        }
    }

    get plan():Plan {
        return this._plan;
    }

    @Input() readonly:boolean = false;
    right = PlanLayout.getViewWidth;
    bottom = PlanLayout.getViewHeight;
    xMitte = PlanLayout.xMitte;
    yMitte = PlanLayout.yMitte;
    xHalfCell = PlanLayout.xHalfCell;
    yHalfCell = PlanLayout.yHalfCell;
    xCell = PlanLayout.cellWidth;
    yCell = PlanLayout.cellHeight;

    cells:Cell[] = [];
    markierung:Markierung;
    erweitert:boolean = false;

    constructor(private planService:PlanService) {
        this.planService = planService;
        this.plan = Plan.createEmptyPlan();
    }


    public getPlanComponent():PlanComponent {
        return this;
    }

    private buildComponents():void {
        this.cells = [];
        for (var index = 0; index < PlanLayout.gridSize(); index++) {
            this.cells[index] = new Cell(PlanLayout.getIJ(index));
        }
        for (var tisch of this._plan.tische) {
            var index = PlanLayout.getIndex(tisch);
            this.cells[index] = tisch;
        }
        this.markierung = new Markierung();
    }

    public losen():void {
        var planManager:PlanManager = new PlanManager(this._plan);
        planManager.losen();
    }

    public reihenClick():void {
        let planAnordnung:PlanAnordnung =
            new PlanAnordnung({tische: this._plan.tische, blockBreite: 4});
        planAnordnung.setzeReihen();

        this.plan = this._plan;
    }

    public uClick():void {
        let planAnordnung:PlanAnordnung;
        planAnordnung = new PlanAnordnung({tische: this._plan.tische, blockBreite: 3});
        planAnordnung.setzeU();

        this.plan = this._plan;

    }

    public swap(cell1:Cell, cell2:Cell) {
        var index1 = PlanLayout.getIndex(cell1);
        var index2 = PlanLayout.getIndex(cell2);

        var hilfi:number = cell1.i;
        var hilfj:number = cell1.j;

        cell1.i = cell2.i;
        cell1.j = cell2.j;
        cell2.i = hilfi;
        cell2.j = hilfj;

        this.cells[index2] = cell1;
        this.cells[index1] = cell2;
    }

    public elemClicked(element:Elem) {
        if (this.readonly) return;
        if (this.markierung.markierungVorhanden()) {
            this.onClickMitMarkierung(element);
            this.markierung.resetMarkierung();
        }
        else { //noch nichts markiert
            if (element.isTisch() || element.isLager()) {
                this.markierung.setzeMarkierung(element);
            }
        }
    }

    private onClickMitMarkierung(element:Elem):void {
        var markiert:Elem = this.markierung.getMarkiertes();
        if (element == markiert) {
            this.clickAufSelbesElement(element);
        } else if (markiert.isLager()) {
            this.neuerTischNachCheck(element)
        } else if (markiert.isTisch()) {
            if (element.isLager()) {
                this.entferneTischNachCheck(markiert);
            } else this.tauscheNachCheck(markiert, element);
        }
    }

    private tauscheNachCheck(elem1:Elem, elem2:Elem):void {
        if (
            (elem1.typ == Elem.TYP_LEERERPLATZ || elem1.isTisch()) &&
            (elem2.typ == Elem.TYP_LEERERPLATZ || elem2.isTisch())
        ) {
            var cell1:Cell = <Cell>elem1;
            var cell2:Cell = <Cell>elem2;
            this.swap(cell1, cell2);
        }
    }

    private neuerTischNachCheck(element:Elem):void {
        if (element.typ == Elem.TYP_LEERERPLATZ) {
            var cell:Cell = <Cell>element;
            var neuerTisch:Tisch = Tisch.leererTisch();
            console.log(neuerTisch);
            neuerTisch.setIJ(cell.getI(), cell.getJ());
            this._plan.tische.push(neuerTisch);
            this.cells[PlanLayout.getIndex(cell)] = neuerTisch;
        }
    }

    private clickAufSelbesElement(element:Elem):void {
        if (element.isTisch()) {
            (<Tisch>element).toggleBelegbar();
        }
    }

    private entferneTischNachCheck(entferne:Elem):void {
        if (entferne.isTisch() == false) return;
        var tisch:Tisch = <Tisch>entferne;
        if (tisch.istBelegt())  return;
        var neuCell:Cell = tisch.toCell();

        PlanComponent.remove(this._plan.tische, tisch);
        this.cells[PlanLayout.getIndex(tisch)] = neuCell;
    }

    private static remove(tische:Tisch[], tisch:Tisch) {
        var index = tische.indexOf(tisch);
        if (index > -1) {
            tische.splice(index, 1);
        }
    }


    public isMarkiert(element:Elem):boolean {
        return this.markierung.istMarkiert(element)
    }

    public deltaI(delta:number):void {
        PlanLayout.deltaI(this.plan, delta);
        this.buildComponents();
    }

    public deltaJ(delta:number):void {
        PlanLayout.deltaJ(this.plan, delta);
        this.buildComponents();
    }

    public deltaX(delta:number):void {
        PlanLayout.viewWidth = PlanLayout.viewWidth + delta;
    }

    public deltaY(delta:number):void {
        PlanLayout.viewHeight = PlanLayout.viewHeight + delta;
    }


}