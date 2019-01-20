import { Component, OnInit } from '@angular/core'
import { RealHero } from '../realHero'
/**
 * Tener en cuenta que en las primeras versiones de la app
 * importábamos directamente el modelo en la vista:
 * import { RELAY_HEROES } from '../mock-heroes'
 * 
 * Ahora, vamos a dejar que la información venga desde un
 * servicio --> HeroService.
 */
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  /**
   * De esta manera, estamos declarando el nombre
   * de nuestro Héroe, pero solo lo estamos haciendo
   * de tipo string.
   *  
   *  hero = 'Windstorm'
   * 
   * A continuación, lo vamos hacer de tipo Objeto,
   * con las mismas propiedades.
   * --> NOTAR: Estamos importando la clase RealHero,
   *            la cual tiene las propiedades del 
   *            objeto RealHero, que vamos a usar.
   */
  
  hero : RealHero = {
    id: 1,
    name: "Windstorm"
  }
  
  /**
   * Creamos una variable de tipo: RealHero
   * para poder tenerla en el "estado" de nuestro
   * componente: heroes.component.ts
   * De esta manera, nuestra variable: selectedHero,
   * va a estar activa cada vez que se invoque desde 
   * el evento -> click
   */
  selectedHero : RealHero
  silverHeroes : RealHero []
  
  /**
   * De esta manaera, realacionamos la lista de 
   * villanos con la variable: silverHeroes.
   * Entonces tenemos un array en el cual podemos
   * iterar en nuestro html --> heroes.component.html
   * 
   * 
   * silverHeroes = RELAY_HEROES
   */
  

  constructor(private heroService: HeroService) { }
  
  
  ngOnInit() {
    console.log("testing element for console")
    this.getSilverHeroes()
  }
  
  getSilverHeroes() : void {
    this.silverHeroes = this.heroService.getRealHeroes()
  }

  onSelect(silverHero: RealHero): void {
    this.selectedHero = silverHero
  }
}
