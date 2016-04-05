/**
 * Created by test on 28.02.2016.
 */
import {Component} from 'angular2/core';

import {PlanComponent} from "./plan.component";
import {Elem} from "../Pojo/element";

@Component({
    selector: 'lager',
    template: `<div id="lager"
                [ngClass] = "getCssClass()"
                (click) = "lagerClicked()"
                >
    Lager
    </div>
    `,
    directives: [],
    providers: [],
    inputs: ['planComponent']
})

export class LagerComponent {
    public planComponent: PlanComponent;
    public lager:Elem;

    constructor() {
        this.lager = new Elem(Elem.TYP_LAGER);
    }

    public lagerClicked():void {
        this.planComponent.elemClicked(this.lager);
    }

    public getCssClass():string {
        var classes:string="";

        if (this.isMarkiert()) {
            classes += " markiert";
        }
        return classes;
    }

    private isMarkiert():any {
        return this.planComponent.isMarkiert(this.lager);
    }
}