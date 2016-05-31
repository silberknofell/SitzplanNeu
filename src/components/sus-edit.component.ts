/**
 * Created by Michael on 11.05.2016.
 */
/**
 * Created by test on 28.12.2015.
 */
import {Component, Input} from '@angular/core';
import {SusService} from "../services/sus.service";
import {Sus, SusWrap} from "../Pojo/sus";
import {SusDetailComponent} from "./sus-detail.component";

@Component({
    selector: 'sus-edit',
    template: `<div class="col-xs-3">
    <ol class="list-group">
    <template ngFor let-sus [ngForOf]="susList">
    <li *ngIf="!sus.isDeleted()"
        class="list-group-item list-group-item-info"  
        [class.active]="sus === selectedSus"
        [class.changed]="sus.isChanged()"
        (click)="select(sus)">
            {{sus.getLongName()}}
        </li>    
    
    </template>


    </ol>
</div>
<div class="col-xs-5">

    <p>
        <sus-detail
                [sus]="selectedSus"
                [gruppeId]="gruppeId"
                (onKeyUp) = onKeyUp($event)
        ></sus-detail>
    </p>
    <div>
        <button id="btnNeu" class="btn btn-success" (click)="neu()">Neue(r) Schüler(in)</button>
        <button id="btnDelete" class="btn btn-danger" (click)="deleteSus()">Löschen</button>
    </div>
</div>
  `,
    styles: [`
        li:hover { background-color:#7CCFF8; } 
        .list-group {  list-style: decimal-leading-zero inside; }
        .list-group-item { display: list-item;}
        li { padding-top: 3px; padding-bottom: 3px }  
        li.changed {background-color:#ff8080; }
        #btnNeu {width: 70%}
        #btnDelete {width: 25%}
  `],
    directives: [SusDetailComponent],
    providers: []
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
                    this.susList = susList.map(s => new SusWrap(s));
                }
            )
    }
    _susList:SusWrap[] = [];
    selectedSus:SusWrap;
    private _gruppeId:number = 0;

    get susList():SusWrap[] {
        console.log(this._susList);
        return this._susList;
    }
    set susList(susList:SusWrap[]) {
        this._susList = susList;
        if (susList.length>0) {
            this.selectedSus = susList[0];
        }
    }

    constructor(private susService:SusService) {
        
    }

    onKeyUp() {
        this.sort();
    }

    sort() {
        this._susList.sort(
            (sus1, sus2) => sus1.nachname.localeCompare(sus2.nachname));
    }

    select (sus:SusWrap) {
        this.selectedSus = sus;
        this.sort();
    }

    private neu() {
        var sus:SusWrap = SusWrap.leererSusWrap(this._gruppeId);
        this.selectedSus = sus;
        this.susList.push(sus);
        this.sort();
    }

    private deleteSus() {
        this.selectedSus.deleteThis();
    }
}

