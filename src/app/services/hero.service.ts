import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";
import { MessageService } from "./message.service";

@Injectable({
    providedIn: "root"
})
export class HeroService {

    public constructor(public messageService: MessageService) { }

    //public getHeroes(): Observable<Hero[]>
    //{
    //    return of (HEROES);
    //}
    public getHeroes(): Promise<Hero[]>
    {
        this.messageService.add("HeroService: fetched heroes");
        return Promise.resolve(HEROES);
    }
}
