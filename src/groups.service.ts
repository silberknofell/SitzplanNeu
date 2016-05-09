/**
 * Created by test on 28.12.2015.
 */
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Gruppe} from "./Pojo/gruppe";
import {Observable} from "rxjs/Observable";



@Injectable()
export class GroupsService {
    private baseUrl:string = 'http://geihe.net/sitzplan2/rest/';
    private http:Http;
    constructor(http:Http) {
        this.http = http;
    }

    getGroups():Gruppe[] {
        return [
            {"id": 1, "bezeichnung": "8d", "sus":[]},
            {"id": 2, "bezeichnung": "6e", "sus":[]},
            {"id": 3, "bezeichnung": "5d", "sus":[]},
            {"id": 4, "bezeichnung": "5b", "sus":[]}
        ].map(g=> new Gruppe(g));
    }

    getGroupsHTML():Observable<Gruppe[]> {
        let url=this.baseUrl + 'gruppen';
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        return res.json() || { };
    }
    private handleError (error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}
