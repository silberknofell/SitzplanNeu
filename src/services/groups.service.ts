/**
 * Created by test on 28.12.2015.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Gruppe} from "../Pojo/gruppe";
import {Observable} from "rxjs/Observable";



@Injectable()
export class GroupsService {
    private baseUrl:string = 'http://geihe.net/sitzplan2/rest/';

    constructor(private http:Http) {
        this.http = http;
    }

    getGruppen():Observable<Gruppe[]> {
        let url=this.baseUrl + 'gruppen';
        return this.http.get(url)
            .map(res => {
                return res.json() || [];
            })
            .catch(this.handleError);
    }

    private handleError (error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    getGroup(group_id:number) {
        let url=this.baseUrl + 'gruppe/' + group_id;
        return this.http.get(url)
            .map(res => {
                return  new Gruppe(res.json());
            })
            .catch(this.handleError);
    }

    save(gruppe:Gruppe) {
        let url = this.baseUrl + 'gruppe';
        let body = JSON.stringify(gruppe.getVorlage());
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(url, body, options)
            .catch(this.handleError);
    }
}
