import {IGruppe} from "./i_gruppe";
import {SelectItem} from "primeng/primeng";
/**
 * Created by test on 28.12.2015.
 */
export class Gruppe  {
    private data:IGruppe;
    constructor(data:IGruppe){
        this.data = data;   
    }

    get extras() {
        return this.data.extras;
    }

    set extras(value) {
        this.data.extras = value;
    }


    get bezeichnung():string {
        return this.data.bezeichnung;
    }

    set bezeichnung(value:string) {
        this.data.bezeichnung = value;
    }

    get id():number {
        return this.data.id;
    }

    get label():string { //für PrimeNG - Elemente
        return this.data.bezeichnung;
    }

    set label(value:string) {
        this.data.bezeichnung = value;
    }
    
    public getVorlage():IGruppe {
        return this.data;
    }

    public static leereGruppe():Gruppe {
        return new Gruppe({
            id: 0,
            bezeichnung: "neu",
            extras: {},
            kennwort: "12345"
        });
    }
}
