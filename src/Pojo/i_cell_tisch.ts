import {Sus} from "./sus";
/**
 * Created by test on 30.12.2015.
 */
export interface ICell {
    i:number;
    j:number;
    fest?:boolean;

}

export interface ITisch extends ICell {
    id?:number;
    sus_id?: number;
    belegbar : boolean;
    typ?: number;
}