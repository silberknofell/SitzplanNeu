/**
 * Created by test on 28.12.2015.
 */
import {Component} from 'angular2/core';
import {GroupsService} from "./../groups.service";
import {Gruppe} from "./../Pojo/gruppe";
import {GroupEditComponent} from "./group-edit.component";
import {PlanSelectComponent} from "./plan-select.component";
@Component({
    selector: 'group-select',
    template: `
    <h1>{{title}}</h1>
        <ul>
            <li *ngFor="#group of gruppen"
                   (click) = select(group)>
                {{group.bezeichnung}}
            </li>
        </ul>
        <group-edit 
            [gruppe]="selectedGroup"
        ></group-edit>
        <plan-select
            [gruppe]="selectedGroup"    
        ></plan-select>
  `,
    styles: [`

  `],
    directives: [GroupEditComponent, PlanSelectComponent],
    providers: [GroupsService]
})

export class GroupSelectComponent {
    private title = 'Gruppenauswahl';
    public gruppen:Gruppe[];
    public selectedGroup:Gruppe;

    constructor(private groupsService:GroupsService) {
        groupsService.getGroupsHTTP()
            .subscribe(
                gruppen => {this.gruppen = gruppen;}
            );
    }

    select (group:Gruppe) {
        this.selectedGroup = group;
    }

}