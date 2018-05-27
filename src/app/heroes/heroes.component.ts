import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Hero } from "../hero";
import { HeroService } from "../services/hero.service";

@Component({
    selector: "app-heroes",
    templateUrl: "./heroes.component.html",
    styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit
{
    public selectedHero: Hero;

    public heroes: Hero[];

    constructor(private heroService: HeroService) { }

    ngOnInit()
    {
        this.getHeroes();
    }

    public onSelect(hero: Hero): void
    {
        this.selectedHero = hero;
    }

    public getHeroes(): void
    {
        //this.heroService.getHeroes()
        //    .subscribe(heroes => this.heroes = heroes);
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
}
