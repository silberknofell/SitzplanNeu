import {IGruppe} from "./i_gruppe";
/**
 * Created by test on 28.12.2015.
 */
export class Gruppe {
    private data:IGruppe;
    constructor(data:IGruppe){
        this.data = data;   
    }

    get  bezeichnung():string {
        return this.data.bezeichnung
    }
    
    get id():number {
        return this.data.id;
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
