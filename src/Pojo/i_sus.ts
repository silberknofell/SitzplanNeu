/**
 * Created by test on 30.12.2015.
 */
export interface ISus {
    id:number;
    name:string;
    nachname:string;
    gruppe_id?:number;
    punkte?: number;
    prefs?:string[];
    archiv?:number;
}