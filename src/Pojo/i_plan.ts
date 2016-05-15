import {ITisch} from "./i_cell_tisch";
import {ISus} from "./i_sus";
import {Tisch} from "./tisch";
/**
 * Created by test on 30.12.2015.
 */

export interface IPlanBeschreibung {
    id: number;
    nr: number;
    text: string;
}

export interface IPlanMetadata {
    id:number;
    gruppe_id:number;
    gruppe:string;
    nr:number;
    raum:string;
    start:string;
    stop:string;
    extras: any;
}

export interface IPlan extends IPlanMetadata{
    tische: ITisch[];
}