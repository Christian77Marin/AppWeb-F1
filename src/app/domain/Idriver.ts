import { Irace } from "../domain/Irace";

export interface Idriver {
    _id:string;
    age:number;
    name:string;
    picture:string;
    team:string;
    globalPos:number;
    races: Irace[];
}
