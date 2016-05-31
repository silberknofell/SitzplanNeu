/**
 * Created by Michael on 11.05.2016.
 */
/**
 * Created by Michael on 11.05.2016.
 */
/**
 * Created by test on 28.12.2015.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Sus, SusWrap} from "../Pojo/sus";
import {SusService} from "../services/sus.service";

@Component({
    selector: 'sus-detail',
    template: `<form>
    <div class="form-group">
        <label for="sus-name">Name (Anzeige)</label>
        <input type="text" 
               class="form-control" 
               id="sus-name" 
               placeholder="Name"
               [(ngModel)]="sus.name" 
               (keyup.enter)="test()">        
    </div>
    <div class="form-group">
        <label for="sus-nachname">Nachname</label>
        <input type="text" 
               class="form-control" 
               id="sus-nachname" 
               placeholder="Nachname"
               [(ngModel)]="sus.nachname" 
               (keyup.enter)="test()"
               (keyup)="keyUp()">        
    </div>
</form>


`,
    styles: [`

  `],
    directives: [],
    providers: []
})

export class SusDetailComponent {
    private susWrap:SusWrap = SusWrap.leererSusWrap();
    @Input() gruppeId:number;
    @Output() onKeyUp = new EventEmitter();
    get sus():SusWrap {
        return this.susWrap;
    }
    @Input()
    set sus(value:SusWrap) {
        this.susWrap = value || SusWrap.leererSusWrap(this.gruppeId);
    }

    constructor() {
    }


    test() {

    }
    keyUp() {
        this.onKeyUp.emit(null);
    }

}