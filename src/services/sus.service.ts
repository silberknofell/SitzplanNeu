/**
 * Created by Michael on 09.05.2016.
 */
import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from "rxjs/Observable";
import {Sus} from "../Pojo/sus";


@Injectable()
export class SusService {
    private baseUrl:string = 'http://geihe.net/sitzplan2/rest/';
    private http:Http;

    constructor(http:Http) {
        this.http = http;
    }

    getSusInGruppe(gruppe_id:number):Observable<Sus[]> {
        let url = this.baseUrl + 'suslist/' + gruppe_id;

        return this.http.get(url)
            .map(this.extractSus)
            .catch(this.handleError);
    }

    private extractSus(res:Response) {
        return res.json()
                .map(s => new Sus(s)) || {};
    }

    private handleError(error:any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    saveSus(sus:Sus) {
        let url = this.baseUrl + 'sus';
        let body = JSON.stringify(sus.susData);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(url, body, options)
            .catch(this.handleError);
    }

    getSusInListe(liste:number[]):Observable<Sus[]> {
        let url = this.baseUrl + 'suslist';

        let body = JSON.stringify(liste);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, body, options)
            .map(this.extractSus)
            .catch(this.handleError);
    }    
}
