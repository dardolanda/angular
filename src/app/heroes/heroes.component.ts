import { Component, OnInit } from '@angular/core'
import { RealHero } from '../realHero'

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

  constructor() { }


  ngOnInit() {
    
  }

}
