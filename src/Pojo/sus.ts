import {ISus} from "./i_sus";
export class Sus {

    set gruppe_id(value:number) {
        this.data.gruppe_id = value;
    }

    get name():string {
        return this.data.name;
    }

    set name(value:string) {
        this.data.name = value;
    }

    get nachname():string {
        return this.data.nachname;
    }

    set nachname(value:string) {
        this.data.nachname = value;
    }

    get id():number {
        return this.data.id;
    }

    set id(value:number) {
        this.data.id = value;
    }

    get susData():ISus {
        return this.data;
    }

    constructor(private data:ISus) {
        this.data = data;
    }

    public getShortName():string {
        return this.name;
    }

    public getLongName():string {
        return this.nachname + ", " + this.name;
    }

    static leererSus(gruppeId = 0):Sus {
        return new Sus(Sus.leererISus(gruppeId));
    }

    static leererISus(gruppeId=0):ISus {
        return {
            id: 0,
            name: "",
            nachname: "",
            gruppe_id: gruppeId,
            aktiv: 1,
            extras: {}
        };
    }

    istLeer():boolean {
        return !this.id;
    }
}