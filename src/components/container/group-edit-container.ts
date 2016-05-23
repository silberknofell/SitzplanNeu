/**
 * Created by Michael on 22.05.2016.
 */
import {OnActivate, Router, RouteSegment} from '@angular/router';
import {Component} from '@angular/core';
@Component({
    selector: 'group-edit-container',
    template: `
        <h1>Gruppe {{id}} editieren</h1>      
                  <li>
                  <ul (click) = "gruppenAuswahl()">Gruppenauswahl</ul>
                  <ul>Plan</ul>
                  <ul>Gruppe editieren</ul>
</li>
    `

})
export class GroupEditContainer implements OnActivate{
    private id;
    routerOnActivate(curr:RouteSegment):void {
        this.id = +curr.getParam('id');
    }


    constructor(private router: Router) {}

    gruppenAuswahl() {
        this.router.navigate(['/group-select']);
    }
}
 