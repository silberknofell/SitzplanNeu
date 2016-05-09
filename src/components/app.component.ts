/**
 * Created by test on 27.12.2015.
 */
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {GroupSelectComponent} from "./group-select.component";
import {PlanComponent} from "./plan.component";
import 'rxjs/Rx';


@Component({
    selector: 'my-app',
    template: `
        <nav>
        <a [routerLink]="['Gruppe']">Gruppe</a>
        <a [routerLink]="['Plan']">Plan</a>
        </nav>
        <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES, PlanComponent],
})
@RouteConfig([
    //{path: '/', redirectTo: ['GroupSelect'] },
    {path: '/gruppe',   name: 'Gruppe', component: GroupSelectComponent},
    {path: '/plan',     name: 'Plan',   component: PlanComponent},
    //{path: '/detail/:id', bezeichnung: 'HeroDetail', component: HeroDetailComponent}
])
export class AppComponent {
    public title = 'Sitzplan-Manager';
}