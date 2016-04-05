import {ISus} from "./i_sus";
export class Sus {
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