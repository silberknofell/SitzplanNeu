/**
 * Created by Michael on 11.05.2016.
 */
/**
 * Created by test on 28.12.2015.
 */
import {Component, Input} from 'angular2/core';
import {SusService} from "../sus.service";
import {Sus} from "../Pojo/sus";
import {EditSusComponent} from "./sus-edit.component";

@Component({
    selector: 'sus-select',
    template: `
<ul>
    <li *ngFor="#sus of susList" 
        (click) = "select(sus)">

        {{sus.getLongName()}}
    </li>
</ul>
<p>  
    <edit-sus 
        [sus] = "selectedSus"
        [gruppe_id] = "gruppe_id"
        ></edit-sus>
</p>
  `,
    styles: [`

  `],
    directives: [EditSusComponent],
    providers: [SusService]
})

export class SusSelectComponent {
    private _susList:Sus[] = [];
    public selectedSus:Sus;
    @Input() gruppe_id:number;
    @Input() get susList():Sus[] {
        return this._susList;
    }
    set susList(value:Sus[]) {
        this._susList = value;
    }


    constructor() {

    }


    select (sus:Sus) {
        this.selectedSus = sus;
    }

}