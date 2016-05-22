import {Cell} from "./cell";
import {Sus} from "./sus";
import {ITisch} from "./i_cell_tisch";
import {Injectable} from "angular2/core";
import {Elem} from "./element";
/**
 * Created by test on 29.12.2015.
 */
@Injectable()
export class Tisch extends Cell {

    private _tischData:ITisch;

    get sus():Sus {
        return this._tischData.sus;
    }

    set sus(value:Sus) {
        this._tischData.sus = value;
    }

    get belegbar():boolean {
        return this._tischData.typ == Tisch.TYP_TISCH_BELEGBAR;
    }

    set belegbar(value:boolean) {
        if (this.istBelegt()) {
            console.log("Tisch" + this._tischData.i + this._tischData.j + " kann Belegbarkeit nicht verlieren, da er bereits belegt ist. Schüler id:" + this._tischData.sus.id);
        } else {
            this._tischData.typ = value ? Tisch.TYP_TISCH_BELEGBAR : Tisch.TYP_TISCH_IMMER_FREI;
        }
    }

    constructor(data:ITisch) {
        super(data);
        this._tischData = data;
        this.typ = Elem.TYP_TISCH_BELEGBAR;
    }

    public istBelegt():boolean {
        return this.sus.id != 0;
    }

    public istFrei():boolean {
        return this.istBelegt() == false;
    }

    public toggleBelegbar() {
        this.belegbar = !this.belegbar;
    }

    public getText():string {
        if (this.belegbar)
            return this.sus.getShortName();

        return "- - -";
    }

    public removeSus():void {
        this.sus = Sus.leererSus();
    }

    public setSus(sus:Sus):void {
        if (this.belegbar || sus.istLeer()) {
            this.sus = sus;
        } else {
            console.log("Tisch" + this.i + this.j + " soll unerlaubt belegt werden. Schüler id:" + sus.id);
        }
    }


    public toCell():Cell {
        return new Cell({i: this.i, j: this.j})
    }

    public static getLeereTischvorlage():ITisch {
        let vorlage = {
            i: 1,
            j: 1,
            sus: Sus.leererSus(),
            typ: Elem.TYP_TISCH_BELEGBAR
        };
        return vorlage;
    }

    public static leererTisch():Tisch {
        return new Tisch(Tisch.getLeereTischvorlage());
    }
    
    public getTischVorlage():ITisch {
        return {
            i: this.getI(),
            j: this.getJ(),
            typ: this.typ,
            sus: this.sus
        }
    }
}