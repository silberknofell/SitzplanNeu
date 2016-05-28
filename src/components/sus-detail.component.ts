/**
 * Created by Michael on 11.05.2016.
 */
/**
 * Created by Michael on 11.05.2016.
 */
/**
 * Created by test on 28.12.2015.
 */
import {Component, Input} from '@angular/core';
import {Sus} from "../Pojo/sus";
import {SusService} from "../services/sus.service";

@Component({
    selector: 'sus-detail',
    template: `
Name <input type="text" name="name" [(ngModel)]="sus.name" /><br />
Nachname<input type="text" name="nachname" [(ngModel)]="sus.nachname" /><br />

<button (click)="neu()">Neu</button>
<button (click)="speichern()">Speichern</button>
<button (click)="delete()">LÖSCHEN</button>

  `,
    styles: [`

  `],
    directives: [],
    providers: []
})

export class SusDetailComponent {
    private _sus:Sus=Sus.leererSus();
    @Input() gruppeId:number;


    get sus():Sus {
        return this._sus;
    }
    @Input()
    set sus(value:Sus) {
        this._sus = value || Sus.leererSus();
        this._sus.gruppe_id = this.gruppeId;
    }

    constructor(private susService:SusService) {
        this.susService = susService;
    }

    neu() {
        this.sus = null;
    }
    
    speichern() {
        this.susService.saveSus(this.sus)
            .subscribe();
    }

    delete() {
        this.susService.deleteSus(this.sus.id)
            .subscribe();
    }

    test() {
        this.susService.getSusInListe([1,2,3])
            .subscribe();
    }

}