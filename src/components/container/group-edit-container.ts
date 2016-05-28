/**
 * Created by Michael on 22.05.2016.
 */
import {OnActivate, Router, RouteSegment} from '@angular/router';
import {Component} from '@angular/core';
import {GroupsService} from "../../services/groups.service";
import {Gruppe} from "../../Pojo/gruppe";
@Component({
    selector: 'group-edit-container',
    template: `
        <h1 *ngIf="gruppe">Gruppe {{gruppe.bezeichnung}} editieren</h1>     
         
        <button (click)="back()">
        zurück</button>
    `
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
}
 