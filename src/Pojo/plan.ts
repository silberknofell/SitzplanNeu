import {Tisch} from "./tisch";
import {Sus} from "./sus";
import {IPlan, IPlanMetadata} from "./i_plan";
import {ITisch} from "./i_cell_tisch";
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

    get gruppe():string {
        return this.data.gruppe;
    }

    get nr():number {
        return this.data.nr;
    }

    get raum():string {
        return this.data.raum;
    }

    get start():string {
        return this.data.start;
    }

    get stop():string {
        return this.data.stop;
    }

    private _tische:Tisch[];
    private susHash:Sus[];

    private data:IPlanMetadata;

    constructor(data:IPlan) {
        this.data = data;
        this.susHash = [];
        for (var s of data.sus) {
            this.susHash[s.id] = new Sus(s);
        }
        this._tische =
            data.tische.map(t => {
                let sus:Sus = this.getSusFromTisch(t);
                return new Tisch(t, sus);
            });

    }

    private getSusFromTisch(t:ITisch) {
        var id:number = t.sus_id;
        return id == 0 ? Sus.leererSus() : this.susHash[t.sus_id];
    };

    public getBelegteTischeList():Tisch[] {
        return this._tische.filter(t => t.belegbar);
    }

    public getSusList():Sus[] {
        return Plan.filt(this.susHash);
    }

    public static filt(a:any[]):any[] { //entfernt "Löcher" aus den Hash
        var b = [];
        for (var i in a) {
            b.push(a[i]);
        }
        return b;
    }

    public getJSON():string {
        return JSON.stringify(this.createVorlage());
    }
    
    public createVorlage():IPlan {        
        return {
            id: this.data.id,
            gruppe: this.data.gruppe,
            nr: this.data.nr,
            raum: this.data.raum,
            start: this.data.start,
            stop: this.data.stop,
            tische: this.tische.map(t=>t.tischData),
            sus: this.getSusList().map(s=>s.susData)
        };
    }

    getMinTischId() {
        return Math.min.apply(Math, this.tische.map(t=>{return t.id}));
    }
    
    public static createNewVorlage(anzahlTische:number) {
        let vorlage:IPlan = {
            id: -1,
            gruppe: 'Gruppe',
            nr: -1,
            raum: 'Raum',
            start: 'start',
            stop: 'stop',
            tische:[],
            sus: []
        };
        for (let i=0; i<=anzahlTische; i++) {
            vorlage.tische.push(Tisch.getLeereTischvorlage());
        }
        return vorlage;
        
    }
}
