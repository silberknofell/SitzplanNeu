/**
 * Created by test on 02.01.2016.
 */
import {Component} from '@angular/core';
import {PlanLayout} from "../plan-layout";
import {Cell} from "../Pojo/cell";
import {PlanComponent} from "./plan.component";
import {Elem} from "../Pojo/element";

@Component({
    selector: 'cell',
    template: `<div
               [style.width.px]="cellWidth()"
               [style.line-height.px]="cellHeight()"
               [style.height.px]="cellHeight()"
               [style.border-width.px]="border"
               [style.margin.px]="margin"
               [style.left.px]="getLeft()"
               [style.top.px]="getTop()"
               [ngClass] ="getCssClass()"
               (click) = "cellClicked()"
               >
    {{getText()}}
    </div>
  `,
    directives: [],
    providers: [],
    inputs: ['cell','planComponent']
})

export class CellComponent {
    public cell:Cell;
    public planComponent: PlanComponent;
    cellWidth = PlanLayout.cellWidth;
    cellHeight = PlanLayout.cellHeight;
    viewWidth = PlanLayout.viewWidth;
    viewHeight = PlanLayout.viewHeight;
    border = PlanLayout.border;
    margin = PlanLayout.margin;

    constructor() {
    }

    public  getLeft():number {
        return (this.cell.i - 1) / PlanLayout.maxI * PlanLayout.viewWidth;
    }

    public  getTop():number {
        return (1 - this.cell.j / PlanLayout.maxJ) * PlanLayout.viewHeight;
    }

    public isFixed():boolean {
        return false;  //TODO
    }

    public getCssClass():string {
        var classes:string="";
        if (this.cell.isTisch()) {
            classes += 'tisch';
        } else {
            classes+='free';
        }

        if (this.isMarkiert()) {
            classes += " markiert";
        }
        return classes;
    }

    public getText():string {
        return this.cell.getText();
    }


    public cellClicked():void {
        this.planComponent.elemClicked(this.cell);
    }

    public isMarkiert():boolean {
        return this.planComponent.isMarkiert(this.cell);
    }
}