/**
 * Created by test on 28.12.2015.
 */
import {Injectable} from 'angular2/core';
import { Http} from 'angular2/http';
import {Gruppe} from "./Pojo/gruppe";


@Injectable()
export class GroupsService {

    constructor(http:Http) {

    }

    getGroups():Gruppe[] {
        return [
            {"id": 1, "name": "8d", "sus":[]},
            {"id": 2, "name": "6e", "sus":[]},
            {"id": 3, "name": "5d", "sus":[]},
            {"id": 4, "name": "5b", "sus":[]}
        ].map(g=> new Gruppe(g));
    }
}
