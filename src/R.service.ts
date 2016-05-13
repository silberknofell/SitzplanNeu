/**
 * Created by Michael on 13.05.2016.
 */
import {Injectable} from "angular2/core";

@Injectable()
export class Rservice {
    private _password: string;

    get password():string {
        return this._password;
    }

    set password(value:string) {
        this._password = value;
    }

    constructor() {}


}