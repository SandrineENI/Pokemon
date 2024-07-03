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
  generations = [
    'Génération I',
    'Génération II',
    'Génération III',
    'Génération IV',
    'Génération V',
    'Génération VI',
    'Génération VII']

    constructor(){
      this.titre='Générations de Pokémons : ';
    }

}
