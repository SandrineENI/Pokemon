import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  constructor(){
    this.titre='Les six premiers Pokémons : ';
    this.sousTitre="Dans l'ordre du pokedex :";
    this.pokemons=[
      {nom:'Bullbizarre',categorie:'Graine',type:'plante,poison',taille:'0,7 m',poids:'6,9 kg'},
      {nom:'Herbizarre',categorie:'Graine',type:'plante,poison',taille:'1 m',poids:'13 kg'},
      {nom:'Florizarre',categorie:'Graine',type:'plante,poison',taille:'2 m',poids:'100 kg'},
      {nom:'Salamèche',categorie:'Lézard',type:'feu',taille:'0,6 m',poids:'8,5 kg'},
      {nom:'Reptincel',categorie:'flamme',type:'feu',taille:'1,1 m',poids:'19 kg'},
      {nom:'Dracaufeu',categorie:'flamme',type:'feu,vol',taille:'1,7 m',poids:'N/A'}
    ];
  }

  
}
