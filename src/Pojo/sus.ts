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
    private data:ISus;

    constructor(data:ISus) {
        this.data = data;
    }

    getShortName():string {
        return this.data.name;
    }

    getLongName():string {
        return this.data.nachname + ", " + this.data.name;
    }

    static
    leererSus():Sus {
        return new Sus({id: 0, name: "", nachname: ""});
    }

    istLeer():boolean {
        return this.data.id == 0;
    }

    getId():number {
        return this.data.id;
    }
    
    
}