/**
 * Created by Michael on 22.05.2016.
 */
import { Component} from '@angular/core';
import {GroupSelectComponent} from "../group-select.component";
@Component({
    selector: 'group-select-container',
    template: `
        <h1>Sitzplanmanager</h1>
        <p><input type="password" placeholder="Kennwort eingeben" [(ngModel)]="password"></p>     
        <p><group-select></group-select></p>
    `,
    directives: [GroupSelectComponent]

})
export class GroupSelectContainer {
    private password:string;
}