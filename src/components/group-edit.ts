/**
 * Created by Michael on 09.05.2016.
 */
import {Component, Input} from "angular2/core";
import {SusService} from "../sus.service";
import {Sus} from "../Pojo/sus";
import {Gruppe} from "../Pojo/gruppe";
import {SusSelectComponent} from "./sus-select.component";
@Component({
    selector: 'group-edit',
    template: `<h1>{{getTitle()}}</h1>
                <sus-select
                    [susList] = getSusList()
                    [gruppe_id] = gruppeID()>
                 </sus-select>
`,
    styles: [`
`], directives: [SusSelectComponent],
    providers: [SusService]
})


export class GroupEditComponent {
    _gruppe:Gruppe;
    @Input()
    set gruppe(gruppe:Gruppe) {
        this._gruppe = gruppe;
        if (gruppe) {
            this.susService.getSusInGruppe(this._gruppe.id)
                .subscribe(
                    susList=> {
                        this._susList = susList;
                    }
                );
        }
    }
    get gruppe():Gruppe {
        return this._gruppe;
    }

    gruppeID() {
        if (this._gruppe) {
            return  this._gruppe.id;
        }
        return 0;
    }
    
    public title = 'Gruppenauswahl';  
    private _susList:Sus[];

    getSusList():Sus[] {
        return this._susList;
    }

    getTitle() {
        if (this.gruppe) {
            return this.gruppe.bezeichnung;
        }
        return "leer";
    }

    constructor(private susService:SusService) {
        this.susService = susService;
    }
}