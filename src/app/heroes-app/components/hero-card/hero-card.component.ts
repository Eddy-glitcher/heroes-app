import { Component, Input } from '@angular/core';
import { MarvelHeroe } from '../../interfaces/marvel-heroes';
@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent{
  @Input() heroe!: MarvelHeroe;
}
