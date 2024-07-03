import { Component } from '@angular/core';

@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.scss'
})
export class GenerationsComponent {
  public titre:String;
  public g1:String;
  public g2:String;
  public g3:String;
  public g4:String;
  public g5:String;
  public g6:String;
  public g7:String;


  constructor(){
    this.titre='Générations de Pokémons : ';
    this.g1='Génération I';
    this.g2='Génération II';
    this.g3='Génération III';
    this.g4='Génération IV';
    this.g5='Génération V';
    this.g6='Génération VI';
    this.g7='Génération VII';
  }

}
