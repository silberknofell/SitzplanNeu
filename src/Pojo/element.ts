/**
 * Created by test on 28.02.2016.
 */
export class Elem {
    public markierbar:boolean;
    public typ:number;

    public static TYP_LEERERPLATZ  :number = 1;
    public static TYP_TISCH_BELEGBAR :number = 2;
    public static TYP_TISCH_IMMER_FREI :number = 3;
    public static TYP_LAGER :number = 3;

    constructor(typ:number) {
        this.markierbar = false;
        this.typ=typ || 0;
    }
}