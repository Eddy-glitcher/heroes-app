import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cards-loading-error',
  templateUrl: './cards-loading-error.component.html',
  styleUrls: ['./cards-loading-error.component.scss']
})
export class CardsLoadingErrorComponent {

  // To get the heroes cards again if an errors ocurrs
  @Output() onGetHeroesData : EventEmitter<void> = new EventEmitter;

  getHeroesData(): void{
    this.onGetHeroesData.emit();
  }
}
