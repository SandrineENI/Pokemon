import { Injectable } from '@angular/core';
import { PokemonsComponent } from '../composants/pokemons/pokemons.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public pokes:Array<any>;

  constructor() { 
    this.pokes=[
      {nom:'Bullbizarre',categorie:'Graine',type:'plante,poison',taille:'0,7 m',poids:'6,9 kg'},
      {nom:'Herbizarre',categorie:'Graine',type:'plante,poison',taille:'1 m',poids:'13 kg'},
      {nom:'Florizarre',categorie:'Graine',type:'plante,poison',taille:'2 m',poids:'100 kg'},
      {nom:'Salamèche',categorie:'Lézard',type:'feu',taille:'0,6 m',poids:'8,5 kg'},
      {nom:'Reptincel',categorie:'flamme',type:'feu',taille:'1,1 m',poids:'19 kg'},
      {nom:'Dracaufeu',categorie:'flamme',type:'feu,vol',taille:'1,7 m',poids:'N/A'}
    ];
  }

  public recupLesPokemons():Array<PokemonsComponent>{
    return this.pokes;
  }
  public comptePokemons():number{
    return this.pokes.length;
  }

 
}
