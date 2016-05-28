/**
 * Created by Michael on 22.05.2016.
 */
import {OnActivate, Router, RouteSegment} from '@angular/router';
import { Component} from '@angular/core';
import {GroupsService} from "../../services/groups.service";
import {Gruppe} from "../../Pojo/gruppe";
import {PlanSelectComponent} from "../plan-select.component";
@Component({
    selector: 'plan-container',
    template: ` <div  *ngIf="gruppe">
                    <button (click)="editGroup()">Gruppe bearbeiten</button>
                    <h1>Gruppe: {{gruppe.bezeichnung}}</h1>
                    <plan-select [gruppe]="gruppe"></plan-select>                    
                </div>
    `,
    directives: [PlanSelectComponent]
})

export class PlanContainer  implements OnActivate{
    private gruppe:Gruppe;
    constructor(private router: Router, private groupService:GroupsService) {}

    routerOnActivate(curr:RouteSegment):void {
        let groupId = +curr.getParam('group_id');
        this.groupService.getGroup(groupId)
            .subscribe(gruppe => this.gruppe = gruppe);
    }

    editGroup() {//TODO
        this.router.navigate(['/gruppe', this.gruppe.id]);
    }
}
