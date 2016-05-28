/**
 * Created by Michael on 11.05.2016.
 */
/**
 * Created by test on 28.12.2015.
 */
import {Component, Input} from '@angular/core';
import {SusService} from "../services/sus.service";
import {Sus} from "../Pojo/sus";
import {SusDetailComponent} from "./sus-detail.component";

@Component({
    selector: 'sus-edit',
    template: `
<ol>
    <li *ngFor="let sus of susList" 
        (click) = "select(sus)">

        {{sus.getLongName()}}
    </li>
</ol>
<p>  
    <sus-detail
        [sus] = "selectedSus"
        [gruppeId] = "gruppeId"
        ></sus-detail>
</p>
  `,
    styles: [`

  `],
    directives: [SusDetailComponent],
    providers: [SusService]
})

export class SusEditComponent {
    get gruppeId() {
        return this._gruppeId;
    }
    @Input()
    set gruppeId(value) {
        this._gruppeId = value;
        this.susService.getSusInGruppe(value)
            .subscribe(
                susList=> {
                    this.susList = susList;
                }
            )
    }
    _susList:Sus[] = [];
    selectedSus:Sus;
    private _gruppeId:number = 0;

    get susList():Sus[] {
        return this._susList;
    }
    set susList(value:Sus[]) {
        this._susList = value;
    }


    constructor(private susService:SusService) {
        
    }


    select (sus:Sus) {
        this.selectedSus = sus;
    }

}