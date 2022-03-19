import { PokemonPage } from './modals/pokemon/pokemon.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pokemon } from './interfaces/pokemon.interface';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /**
   * It contains the pokemons' array
   */
  public pokemons: Pokemon[] = [];

  /**
   * It contains the pages
   */

  public page: number = 0;





  constructor(private pokemonService: PokemonService, public modalController: ModalController) {
    this.pokemonService.getPokemons()
        .subscribe(pokemons =>{
        
          this.pokemons = pokemons;
          
        })
  }


  /**
   * It changes the page to another
   */

    public nextPage(){
      
        this.page += 5;
      
    }


  /**
   * It changes the page to previous
   */

      public previousPage(){
        if (this.page > 0) {
          this.page -= 5;
        }
      }


      async infoPokemon(id:string, name: string, img: string) {
        const modal = await this.modalController.create({
          component: PokemonPage,
          componentProps: {
            id,
            name, 
            img
          },
          cssClass: 'my-custom-class'
        });
        return await modal.present();
      }
    }

