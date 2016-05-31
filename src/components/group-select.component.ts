/**
 * Created by test on 28.12.2015.
 */
import {Component} from '@angular/core';
import {GroupsService} from "../services/groups.service";
import {Router} from '@angular/router';
import {Gruppe} from "./../Pojo/gruppe";

@Component({
    selector: 'group-select',
    template: `
        <div class="btn-toolbar">
            <span *ngFor="let group of gruppen"
                class="btn btn-success"
                (click) = "select(group)">
                {{group.bezeichnung}}
            </span>
        </div>
  `,
    styles: [`

  `],
    directives: [],
    providers: []
})

export class GroupSelectComponent {
    public gruppen:Gruppe[];

    constructor(private groupsService:GroupsService, private router: Router) {
        groupsService.getGruppen()
            .subscribe(
                gruppen => {this.gruppen = gruppen;}
            );
    }

    select (group:Gruppe) {
        this.router.navigate(['/plaene', group.id]);
    }
}