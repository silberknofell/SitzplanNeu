import {Cell} from "./cell";
import {Elem} from "./element";
/**
 * Created by test on 10.01.2016.
 */
export class Markierung {
    private elem:Elem = null;

    public resetMarkierung():void {
        this.elem = null;
    };

    public setzeMarkierung(element:Elem):void {
        this.elem = element;
    };

    public markierungVorhanden():boolean {
        return this.elem != null;
    };

    public istMarkiert(element:Elem):boolean {
        return this.elem == element;
    };

    public getMarkiertes():Elem {
        return this.elem;
    };
}