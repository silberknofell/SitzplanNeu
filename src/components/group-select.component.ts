/**
 * Created by test on 28.12.2015.
 */
import {Component} from 'angular2/core';
import {GroupsService} from "./../groups.service";
import {Gruppe} from "./../Pojo/gruppe";
@Component({
    selector: 'group-select',
    template: `
    <h1>{{title}}</h1>
        <ul>
            <li *ngFor="#group of gruppen">
                {{group.bezeichnung}}
            </li>
        </ul>
  `,
    styles: [`

  `],
    directives: [],
    providers: [GroupsService]
})

export class GroupSelectComponent {
    public title = 'Gruppenauswahl';
    public gruppen:Gruppe[];

    constructor(private groupsService:GroupsService) {
        groupsService.getGroupsHTML()
            .subscribe(
                gruppen => {this.gruppen = gruppen;}
            );
    }


}