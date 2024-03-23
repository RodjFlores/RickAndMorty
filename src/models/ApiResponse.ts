import { Character } from "./Character";
import { Episode } from "./Episode";

export interface ApiResponse {
    info:{
        count:number,
        pages:number,
        next:string,
        prev:string,
    },
    results:Character[]|Episode[]
}