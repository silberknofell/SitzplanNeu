/**
 * Created by Michael on 22.05.2016.
 */
import {OnActivate, Router, RouteSegment} from '@angular/router';
import {Component, ViewChild, Injectable} from '@angular/core';
import {GroupsService} from "../../services/groups.service";
import {Gruppe} from "../../Pojo/gruppe";
import {SusEditComponent} from "../sus-edit.component";
import {SusWrap} from "../../Pojo/sus";
import {SusService} from "../../services/sus.service";
@Component({
    selector: 'group-edit-container',
    template: `<div *ngIf="gruppe">

    <div class="col-xs-2">
        <form>
            <div class="form-group">
                <h4><label for="gruppenBezeichnung" class="">Gruppenname</label></h4>
                <input type="text"
                       class="form-control input-lg"
                       id="gruppenBezeichnung"
                       placeholder="Name"
                       [(ngModel)]="gruppe.bezeichnung">
            </div>
        </form>
    </div>

    <div>
        <sus-edit [gruppeId]="gruppe.id"></sus-edit>
    </div>

    <div class="col-xs-2">
        <button class="btn btn-warning bt-lg btn-block" (click)="back()">
            abbrechen
        </button>
        <button class="btn btn-success bt-lg btn-block" (click)="save()">
            Änderungen übernehmen
        </button>
    </div>
</div>
    `,
    directives: [SusEditComponent],
    providers: [SusService]
})
@Injectable()
export class GroupEditContainer implements OnActivate{
    private gruppe:Gruppe;

    @ViewChild(SusEditComponent)
    private susEditComponent:SusEditComponent;

    constructor(private router: Router,
                private groupService:GroupsService,
                private susService:SusService) {}

    routerOnActivate(curr:RouteSegment):void {
        let groupId:number = +curr.getParam('id');
        this.groupService.getGroup(groupId)
            .subscribe(group => this.gruppe = group);
    }

    back() {
        this.router.navigate(['/plaene', this.gruppe.id]);
    }
    
    save() {
        this.groupService.save(this.gruppe)
            .subscribe(() => this.back());
        this.susEditComponent.susList.forEach(susWrap => this.saveWrap(susWrap));
    }

    private saveWrap(susWrap:SusWrap):void {
        if (susWrap.deleted) {
            let id = susWrap.sus.id;
            if (id > 0) {
                this.susService.deleteSus(id).subscribe();
            }
        } else if (susWrap.changed) {
            console.log("vor Aufruf ", susWrap);
            console.log("vor Aufruf ", this.susService);
            this.susService.saveSus(susWrap.sus).subscribe();
            console.log("nach Aufruf ", susWrap);
        }
    }
}