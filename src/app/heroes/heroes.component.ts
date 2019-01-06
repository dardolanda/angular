import { Component, OnInit } from '@angular/core'
import { RealHero } from '../realHero'
import { RELAY_HEROES } from '../mock-heroes' 

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
  
  /**
   * De esta manaera, realacionamos la lista de 
   * villanos con la variable: silverHeroes.
   * Entonces tenemos un array en el cual podemos
   * iterar en nuestro html --> heroes.component.html
   * 
   */
  silverHeroes = RELAY_HEROES

  constructor() { }
  
  
  ngOnInit() {
    console.log("testing element for console");
  }
  
  onSelect(silverHero: RealHero): void {
    this.selectedHero = silverHero    
  }
}
