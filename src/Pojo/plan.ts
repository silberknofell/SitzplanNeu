import {Tisch} from "./tisch";
import {Sus} from "./sus";
import {IPlan, IPlanMetadata, IPlanBeschreibung} from "./i_plan";
import {ITisch} from "./i_cell_tisch";
import {Gruppe} from "./gruppe";
/**
 * Created by test on 29.12.2015.
 */
export class Plan {
    get tische():Tisch[] {
        return this._tische;
    }

    get id():number {
        return this.data.id;
    }

    get gruppeBezeichnung():string {
        return this.data.gruppe;
    }

    set gruppe(gruppe:Gruppe) {
        this.data.gruppe = gruppe.bezeichnung;
        this.data.id = gruppe.id;
    }

    get nr():number {
        return this.data.nr;
    }

    get raum():string {
        return this.data.raum;
    }

    set raum(raum:string) {
        this.data.raum = raum;
    }

    get start():string {
        return this.data.start;
    }

    set start(start:string) {
        this.data.start = start;
    }

    get stop():string {
        return this.data.stop;
    }

    set stop(stop:string) {
        this.data.stop = stop;
    }
    
    private _tische:Tisch[];
    private data:IPlanMetadata;

    constructor(data:IPlan) {
        this.data = data;
        this._tische =
            data.tische.map(t =>  new Tisch(t));
    }

    public getBelegbareTischeList():Tisch[] {
        return this._tische.filter(t => t.belegbar);
    }

    public getSusList():Sus[] {
        return this.tische
            .map(tisch => tisch.sus)
            .filter(sus => sus.istLeer() == false);
    }

    public getJSON():string {
        return JSON.stringify(this.createVorlage());
    }

    public createVorlage():IPlan {
        return {
            id: this.data.id,
            gruppe: this.data.gruppe,
            gruppe_id: this.data.gruppe_id,
            nr: this.data.nr,
            raum: this.data.raum,
            start: this.data.start,
            stop: this.data.stop,
            extras: this.data.extras,
            tische: this.tische.map(t=>t.getTischVorlage())
        };
    }

    public static createNewVorlage(anzahlTische:number):IPlan {
        let vorlage:IPlan = {
            id: 0,
            gruppe: 'neue Gruppe',
            gruppe_id: 0,
            nr: 0,
            raum: 'Raum',
            start: 'start',
            stop: 'stop',
            extras: {},
            tische: []
        };
        for (let i = 0; i < anzahlTische; i++) {
            vorlage.tische.push(Tisch.getLeereTischvorlage());
        }
        return vorlage;
    }

    public static createEmptyPlan(anzahlTische:number=0):Plan {
        return new Plan(this.createNewVorlage(anzahlTische));
    }
}
