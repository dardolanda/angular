import { Injectable } from '@angular/core'
import { RELAY_HEROES } from './mock-heroes'
import { RealHero } from './realHero'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getRealHeroes() : RealHero [] {
    return RELAY_HEROES
  }

}
