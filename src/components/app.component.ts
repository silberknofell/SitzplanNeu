/**
 * Created by test on 27.12.2015.
 */
import {Component,OnInit} from '@angular/core';
import {Routes,Router, ROUTER_DIRECTIVES} from '@angular/router';
import 'rxjs/Rx';
import {GroupSelectContainer} from "./container/group-select-container.component";
import {PlanContainer} from "./container/plan-container";
import {GroupEditContainer} from "./container/group-edit-container";


@Component({
    selector: 'my-app',
    template: `
        <nav>        
        <a [routerLink]="['/group-select']">Gruppenauswahl</a>
        <a [routerLink]="['/plan/2']">Plan</a>
        <a [routerLink]="['/gruppe/2']">Gruppe editieren</a>
        </nav>
        <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
})
@Routes([
    {path: '/plan/:group_id', component: PlanContainer},
    {path: '/gruppe/:id', component: GroupEditContainer},
    {path: '/group-select', component: GroupSelectContainer}
])
export class AppComponent implements OnInit {
    constructor(private router: Router) {}
    
    ngOnInit() {
        this.router.navigate(['/group-select']);
    }
}