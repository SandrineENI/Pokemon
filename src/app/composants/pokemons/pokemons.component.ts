import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss'
})
export class PokemonsComponent {
  public titre:String;
  public sousTitre:String;
  public pokemons:Array<any>;

  constructor(@Inject(ApiService) private api:ApiService)
  {
    this.titre='Les six premiers Pokémons : ';
    this.sousTitre=this.api.comptePokemons() + " pokémons en base de données";
    this.pokemons=this.api.recupLesPokemons();
  }
 
}
