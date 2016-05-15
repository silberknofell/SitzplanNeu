import {Sus} from "./sus";
/**
 * Created by test on 30.12.2015.
 */
export interface ICell {
    i:number;
    j:number;
}

export interface ITisch extends ICell {
    sus: Sus;
    typ: number;
}