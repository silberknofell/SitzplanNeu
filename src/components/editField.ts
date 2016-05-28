/**
 * Created by Michael on 28.05.2016.
 */
import {Component, Input} from "@angular/core";
@Component({
    selector: 'plan',
    template: `
        {{text}} 
        <input [(ngModel)] = "text">
    `
})

export class EditField {
    @Input() text:number;
}