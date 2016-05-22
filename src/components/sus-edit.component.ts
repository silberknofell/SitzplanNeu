/**
 * Created by Michael on 11.05.2016.
 */
/**
 * Created by Michael on 11.05.2016.
 */
/**
 * Created by test on 28.12.2015.
 */
import {Component, Input} from 'angular2/core';
import {Sus} from "../Pojo/sus";
import {SusService} from "../services/sus.service";

@Component({
    selector: 'edit-sus',
    template: `
Name <input type="text" name="name" [(ngModel)]="sus.name" /><br />
Nachname<input type="text" name="nachname" [(ngModel)]="sus.nachname" /><br />

<button (click)="neu()">Neu</button>
<button (click)="speichern()">Speichern</button>
<button (click)="test()">TEST</button>

  `,
    styles: [`

  `],
    directives: [],
    providers: []
})

export class EditSusComponent {
    private susService:SusService;
    private _sus:Sus=Sus.leererSus();
    @Input() gruppe_id:number;

    @Input()
    get sus():Sus {
        return this._sus;
    }

    set sus(value:Sus) {
        this._sus = value || Sus.leererSus();
        this._sus.gruppe_id = this.gruppe_id;
    }

    constructor(susService:SusService) {
        this.susService = susService;
    }

    neu() {
        this.sus = null;
    }
    
    speichern() {
        this.susService.saveSus(this.sus)
            .subscribe();
    }

    test() {
        this.susService.getSusInListe([1,2,3])
            .subscribe();
    }

}