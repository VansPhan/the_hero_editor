import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-app',
  providers: [ HeroService ],
  templateUrl: './app/hero.html'
})

export class AppComponent implements OnInit { 
	ngOnInit(): void {
		this.getHeroes();
  	}
	constructor(private heroService: HeroService) { }

	title = 'Tour of Heroes';
	heroes: Hero[];
	selectedHero: Hero;

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

}
