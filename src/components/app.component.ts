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
    template: `<div class="container">
        <router-outlet></router-outlet>
        </div>
  `,
    directives: [ROUTER_DIRECTIVES],
})
@Routes([
    {path: '/plaene/:group_id', component: PlanContainer},
    {path: '/gruppe/:id', component: GroupEditContainer},
    {path: '/', component: GroupSelectContainer}
])
export class AppComponent implements OnInit {
    constructor(private router: Router) {}
    
    ngOnInit() {
        this.router.navigate(['/']);
    }
}