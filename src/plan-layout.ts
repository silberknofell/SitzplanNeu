import {Plan} from "./Pojo/plan";
import {Cell} from "./Pojo/cell";
import {ICell} from "./Pojo/i_cell_tisch";
export class PlanLayout {
    public static viewWidth:number = 800;
    public static viewHeight:number = 500;
    public static border:number = 1;
    public static margin:number = 3;
    public static maxI:number = 9;
    public static maxJ:number = 6;

    public static getViewWidth(){
        return PlanLayout.viewWidth;
    }
    public static getViewHeight(){
        return PlanLayout.viewHeight;
    }

    public static gridSize():number {
        return PlanLayout.maxI * PlanLayout.maxJ;
    }

    public static getNull():number {
        return 0;
    }
    
    public static cellWidth():number {
        return PlanLayout.viewWidth / PlanLayout.maxI - PlanLayout.rand2();
    }

    public static cellHeight():number {
        return PlanLayout.viewHeight / PlanLayout.maxJ - PlanLayout.rand2();
    }

    private static rand2():number {
        return 2 * (PlanLayout.border + PlanLayout.margin);
    }

    public static xMitte():number {
        return PlanLayout.viewWidth / 2;
    }

    public static yMitte():number {
        return PlanLayout.viewHeight / 2;
    }

    public static xHalfCell():number {
        return PlanLayout.cellWidth() / 2;
    }
    public static yHalfCell():number {
        return PlanLayout.cellHeight() / 2;
    }

    static setIJ(plan:Plan):void {
        this.maxI = 1;
        this.maxJ = 1;
        for (var tisch of plan.tische) {
            if (tisch.i > this.maxI) {
                this.maxI = 1*tisch.i
            };
            if (tisch.j > this.maxJ) {
                this.maxJ = 1*tisch.j
            }
        }

    }

    public static getIndex(cell:ICell):number {
        return (cell.j - 1) * PlanLayout.maxI + (cell.i - 1);
    }

    public static getIJ(index:number):ICell {
        var i:number = (index % PlanLayout.maxI) + 1;
        var j:number = Math.floor(index / PlanLayout.maxI) + 1;
        return {'i': i, 'j': j};
    }


}