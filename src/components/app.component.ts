/**
 * Created by test on 27.12.2015.
 */
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {GroupSelectComponent} from "./group-select.component";
import {PlanComponent} from "./plan.component";


@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES, PlanComponent],
})
@RouteConfig([
    //{path: '/', redirectTo: ['GroupSelect'] },
    {path: '/', name: 'Plan', component: PlanComponent},
    //{path: '/heroes', name: 'Heroes', component: HeroesComponent, useAsDefault: true},
    //{path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent}
])
export class AppComponent {
    public title = 'Sitzplan-Manager';
}