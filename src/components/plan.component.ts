/**
 * Created by test on 31.12.2015.
 */
import {Component} from "angular2/core";
import {Plan} from "./../Pojo/plan";
import {PlanService} from "../plan.service";
import {CellComponent} from "./cell.component";
import {Tisch} from "../Pojo/tisch";
import {Cell} from "../Pojo/cell";
import {PlanLayout} from "../plan-layout";
import {ITisch} from "../Pojo/i_cell_tisch";
import {Markierung} from "../Pojo/markierung";
import {PlanManager} from "../plan-manager";
import {Elem} from "../Pojo/element";
import {LagerComponent} from "./lager.component";
import {IPlanBeschreibung, IPlan} from "../Pojo/i_plan";
import {PlanAnordnung} from "../plan-anordnung";
import {PlanSelectComponent} from "./plan-select.component";
import {PlanInout} from "./plan-inout.component";

@Component({
    selector: 'plan',
    template: `<button (click)="deltaI(1)">i+1</button>
<button (click)="deltaI(-1)">i-1</button>
<button (click)="deltaJ(1)">j+1</button>
<button (click)="deltaJ(-1)">j-1</button>
<button (click)="deltaX(50)">x+50</button>
<button (click)="deltaX(-50)">x-50</button>
<button (click)="deltaY(50)">y+50</button>
<button (click)="deltaY(-50)">y-50</button>

<h1>Sitzplan {{plan.gruppe}} {{plan.raum}}</h1>
<div class="plan"
     [style.width.px]="viewWidth()"
     [style.height.px]="viewHeight()"
>

    <cell *ngFor="#cell of cells"
          [cell]="cell"
          [planComponent]="getPlanComponent()"
    ></cell>

    <div id="tafel"
         [style.top.px]="tafelTop()"
         [style.left.px]="tafelLeft()"
         (click)="tafelClick()"
    >Tafel
    </div>
</div>


<button (click)="reihenClick()">Reihen</button>
<button (click)="uClick()">U-Form</button>

<plan-inout
        [planComponent]="getPlanComponent()"
        [plan] = "plan"
></plan-inout>
<plan-select
        [planComponent]="getPlanComponent()"
></plan-select>
<lager
        [planComponent]="getPlanComponent()"
></lager>
  `,
    inputs: ['readonly'],
    directives: [CellComponent, LagerComponent, PlanSelectComponent, 
                    PlanInout],
    providers: [PlanService],
})

export class PlanComponent {

    readonly:boolean = false;
    private plan:Plan;
    viewWidth = PlanLayout.getViewWidth;
    viewHeight = PlanLayout.getViewHeight;
    tafelLeft = PlanLayout.leftMitte;
    tafelTop = PlanLayout.getViewHeight;

    cells:Cell[] = [];
    markierung:Markierung;
    planService:PlanService;
    austausch:string;

    constructor(planService:PlanService) {
        this.planService = planService;
        planService.setGruppeId(1);
        this.setPlan(planService.readPlan(1));
        PlanLayout.setIJ(this.plan);
        this.buildComponents();
    }

    public setPlan(plan:Plan) {
        this.plan = plan;
        PlanLayout.setIJ(this.plan);
        this.buildComponents();
    }

    public getPlanComponent():PlanComponent {
        return this;
    }

    private buildComponents():void {
        this.cells = [];
        for (var index = 0; index < PlanLayout.gridSize(); index++) {
            this.cells[index] = new Cell(PlanLayout.getIJ(index));
        }
        for (var tisch of this.plan.tische) {
            var index = PlanLayout.getIndex(tisch);
            this.cells[index] = tisch;
        }

        this.markierung = new Markierung();
    }

    public tafelClick():void {
        var planManager:PlanManager = new PlanManager(this.plan);
        planManager.losen();
    }

    public reihenClick():void {
        let planAnordnung:PlanAnordnung =
            new PlanAnordnung({tische: this.plan.tische, blockBreite: 4});
        planAnordnung.setzeReihen();

        this.setPlan(this.plan);
    }

    public uClick():void {
        let planAnordnung:PlanAnordnung;
        planAnordnung = new PlanAnordnung({tische: this.plan.tische, blockBreite: 3});
        planAnordnung.setzeU();

        this.setPlan(this.plan);

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
            if (element.typ == Elem.TYP_TISCH || element.typ == Elem.TYP_LAGER) {
                this.markierung.setzeMarkierung(element);
            }
        }
    }

    private onClickMitMarkierung(element:Elem):void {
        var markiert:Elem = this.markierung.getMarkiertes();
        if (element == markiert) {
            this.clickAufSelbesElement(element);
        } else if (markiert.typ == Elem.TYP_LAGER) {
            this.neuerTischNachCheck(element)
        } else if (markiert.typ == Elem.TYP_TISCH) {
            if (element.typ == Elem.TYP_LAGER) {
                this.entferneTischNachCheck(markiert);
            } else this.tauscheNachCheck(markiert, element);
        }
    }

    private tauscheNachCheck(elem1:Elem, elem2:Elem):void {
        if (
            (elem1.typ == Elem.TYP_LEERERPLATZ || elem1.typ == Elem.TYP_TISCH) &&
            (elem1.typ == Elem.TYP_LEERERPLATZ || elem1.typ == Elem.TYP_TISCH)
        ) {
            var cell1:Cell = <Cell>elem1;
            var cell2:Cell = <Cell>elem2;
            this.swap(cell1, cell2);
        }
    }

    private neuerTischNachCheck(element:Elem):void {
        if (element.typ == Elem.TYP_LEERERPLATZ) {
            var cell:Cell = <Cell>element;
            let newId:number = Math.min(this.plan.getMinTischId(), 0)-1;
            var tischVorlage:ITisch = {
                i: cell.getI(),
                j: cell.getJ(),
                belegbar: true,
                sus_id: 0,
                id: newId
        }
            ;
            var neuerTisch = new Tisch(tischVorlage, null);
            this.plan.tische.push(neuerTisch);
            this.cells[PlanLayout.getIndex(cell)] = neuerTisch;
        }
    }

    private clickAufSelbesElement(element:Elem):void {
        if (element.typ == Elem.TYP_TISCH) {
            (<Tisch>element).toggleBelegbar();
        }
    }

    private entferneTischNachCheck(entferne:Elem):void {
        if (entferne.typ != Elem.TYP_TISCH) return;
        var tisch:Tisch = <Tisch>entferne;
        if (tisch.istBelegt())  return;
        var neuCell:Cell = tisch.toCell();

        PlanComponent.remove(this.plan.tische, tisch);
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
        PlanLayout.maxI = PlanLayout.maxI + delta;
        this.buildComponents();
    }

    public deltaJ(delta:number):void {
        PlanLayout.maxJ = PlanLayout.maxJ + delta;
        this.buildComponents();
    }

    public deltaX(delta:number):void {
        PlanLayout.viewWidth = PlanLayout.viewWidth + delta;
    }

    public deltaY(delta:number):void {
        PlanLayout.viewHeight = PlanLayout.viewHeight + delta;
    }


}