import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'src/environments/api';
import { FetchAllPokemonResponse, Pokemon } from '../interfaces/pokemon.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _http: HttpClient) { }


  /**
   * Method which brings 20 pokemons
   */

  public getPokemons(): Observable<Pokemon[]>{
  return this._http.get<FetchAllPokemonResponse>(`${url}/pokemon/?limit=20`)
             .pipe(
               map(this.transformPokemonData)
             )
  }

  /**
   * It changes the data more especifically with details
   */

  private transformPokemonData(resp: FetchAllPokemonResponse): Pokemon[]{
    //It brings the data what I want to show in the screen
    const pokemonList: Pokemon[] = resp.results.map(pokemon => {
      
    //It segments the response in positions
     const pokeArray = pokemon.url.split('/');
     const id = pokeArray[6];
     const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
     

    return{
      id,
      name: pokemon.name,
      img
    }

   })

   return pokemonList;

  }




}
