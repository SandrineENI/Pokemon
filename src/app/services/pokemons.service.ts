import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonsComponent } from '../composants/pokemons/pokemons.component';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private _base_url: string ='https://pokeapi.co/api/v2/pokemon/';
  constructor(
    @Inject(HttpClient) private _http:HttpClient
  ) { 

  }

  public recupPokes():Observable<PokemonsComponent[]>{
    return this._http.get<PokemonsComponent[]>(this._base_url+'/all.json');
  }
}
