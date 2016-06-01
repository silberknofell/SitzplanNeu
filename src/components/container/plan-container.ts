/**
 * Created by Michael on 22.05.2016.
 */
import {OnActivate, Router, RouteSegment} from '@angular/router';
import { Component} from '@angular/core';
import {GroupsService} from "../../services/groups.service";
import {Gruppe} from "../../Pojo/gruppe";
import {PlanSelectComponent} from "../plan-select.component";
import {PlanComponent} from "../plan.component";
import {Plan} from "../../Pojo/plan";
import {PlanService} from "../../services/plan.service";
@Component({
    selector: 'plan-container',
    template: `
<div *ngIf="gruppe">
    <p class="group-header">
        <h1>{{gruppe.bezeichnung}}</h1>
           
        <button class="btn btn-primary" (click)="editGroup()">
            Gruppe bearbeiten
        </button>
         
        <plan-select    [gruppe]="gruppe"
                        (onPlanChange)="onPlanChange($event)"
                        ></plan-select>
        

    <div >
        <plan [plan]="_plan"></plan>
    </div>
    
</div>
    `,
    styles: [`
                h1 {display: inline;}
                plan-select { margin: 100px;} 
                button {float: right;}
            `],
    directives: [PlanComponent, PlanSelectComponent],
    providers: [PlanService]
})

export class PlanContainer  implements OnActivate{
    private gruppe:Gruppe;
    private _plan:Plan;
    set plan(value:Plan) {
        this._plan = value;
    }

    constructor(private router: Router, private groupService:GroupsService) {}

    routerOnActivate(curr:RouteSegment):void {
        let groupId = +curr.getParam('group_id');
        this.groupService.getGroup(groupId)
            .subscribe(gruppe => this.gruppe = gruppe);
    }

    editGroup() {//TODO
        this.router.navigate(['/gruppe', this.gruppe.id]);
    }

    onPlanChange(plan:Plan) {
        this.plan=plan;
    }
}
