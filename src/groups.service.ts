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

    getGruppen():Observable<Gruppe[]> {
        let url=this.baseUrl + 'gruppen';
        return this.http.get(url)
            .map(res => {
                return res.json() || { }
            })
            .catch(this.handleError);
    }

    private handleError (error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}
