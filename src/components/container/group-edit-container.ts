/**
 * Created by Michael on 22.05.2016.
 */
import {OnActivate, Router, RouteSegment} from '@angular/router';
import {Component} from '@angular/core';
import {GroupsService} from "../../services/groups.service";
import {Gruppe} from "../../Pojo/gruppe";
import {SusEditComponent} from "../sus-edit.component";
@Component({
    selector: 'group-edit-container',
    template: `   
    <div *ngIf="gruppe">
        <h1>Gruppe {{gruppe.bezeichnung}} editieren</h1>
        Gruppenname: <input [(ngModel)]="gruppe.bezeichnung">
        <button (click)="back()">
            zurück
        </button>
        <button (click)="save()">
            Speichern
        </button>
        <sus-edit [gruppeId]="gruppe.id"></sus-edit>
    </div>
    

    `,
    directives: [SusEditComponent]
})
export class GroupEditContainer implements OnActivate{
    private gruppe:Gruppe;

    constructor(private router: Router, private groupService:GroupsService) {}
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
    }
}
 