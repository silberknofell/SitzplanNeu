/**
 * Created by Michael on 22.05.2016.
 */
import {OnActivate, Router, RouteSegment} from '@angular/router';
import {Component} from '@angular/core';
import {GroupsService} from "../../services/groups.service";
@Component({
    selector: 'group-edit-container',
    template: `
        <h1>Gruppe editieren</h1>      
</li>
    `

})
export class GroupEditContainer implements OnActivate{
    private groupId;

    constructor(private router: Router, private groupService:GroupsService) {}
    routerOnActivate(curr:RouteSegment):void {
        this.groupId = +curr.getParam('id');
        console.log(curr);
    }
}
 