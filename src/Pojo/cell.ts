import {ICell} from "./i_cell_tisch";
import {Injectable} from "angular2/core";
import {Elem} from "./element";
/**
 * Created by test on 03.01.2016.
 */
@Injectable()
export class Cell extends Elem implements ICell {
    get j():number {
        return this.data.j;
    }

    set j(value:number) {
        this.data.j = value;
    }
    get i():number {
        return this.data.i;
    }

    set i(value:number) {
        this.data.i = value;
    }
    
    constructor(private data:ICell) {
        super(Elem.TYP_LEERERPLATZ);
        this.markierbar = true;
        this.data = data;
    }

    public setIJ(i:number, j:number):void {
        this.data.i = i;
        this.data.j = j;
    }

    public  getI():number {
        return this.data.i;
    }

    public  getJ():number {
        return this.data.j;
    }

    public getText() : string {
        return '';
        // return "i"+this.i+"/j"+this.j;
    }

}
