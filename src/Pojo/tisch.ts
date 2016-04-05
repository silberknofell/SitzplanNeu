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
    get tischData():ITisch {
        return this._tischData;
    }
    private _sus;
    private _tischData:ITisch;
    
    get sus_id():number {
        return this._tischData.sus_id  || 0;
    }
    get sus():Sus {
        return this._sus || Sus.leererSus();
    }

    set sus(value:Sus) {
        this._sus = value;
        this._tischData.sus_id = value.getId();
    }

    get id():number {
        return this._tischData.id || 0;
    }
    
    set id(value:number) {
        this._tischData.id = value || 0;
    }
    get belegbar():boolean {
        return this._tischData.belegbar;
    }

    set belegbar(value:boolean) {
        if (this.istBelegt()) {
            console.log("Tisch" + this._tischData.id + " kann Belegbarkeit nicht verlieren, da er bereits belegt ist. Schüler id:" + this._tischData.sus_id);
        } else {
            this._tischData.belegbar = value;
        }
    }

    constructor(data:ITisch, sus:Sus) {
        super(data);
        this._tischData=data;
        this.typ = Elem.TYP_TISCH;
        if (sus) {
            this.sus = sus;
        } else {
            this.sus = Sus.leererSus();
        }
    }

    public istBelegt():boolean {
        return this.sus.getId() != 0;
    }

    public istFrei():boolean {
        return this.istBelegt() == false;
    }

    public toggleBelegbar() {
        this.belegbar = ! this.belegbar;
    }

    public getText():string {
       if (this.belegbar)
           return  this.sus.getShortName();

        return "- - -";
    }

    public removeSus():void {
        this.sus =Sus.leererSus();
        }

    public setSus(sus:Sus):void {
        if (this.belegbar || sus.istLeer()) {
            this.sus = sus;
        } else {
            console.log("Tisch" + this.id + " soll unerlaubt belegt werden. Schüler id:" + sus.getId());
        }
    }


    public toCell():Cell {
        return new Cell({ i: this.i, j: this.j})
    }
    
    public static getLeereTischvorlage() {
        let vorlage = {
            i: 1,
            j: 1,
            fest: false,
            id: -1,
            sus_id: 0,
            belegbar: true,
            typ: Elem.TYP_TISCH
        };
        return vorlage;
    }
}