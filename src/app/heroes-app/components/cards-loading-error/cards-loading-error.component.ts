import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cards-loading-error',
  templateUrl: './cards-loading-error.component.html',
  styleUrls: ['./cards-loading-error.component.scss']
})
export class CardsLoadingErrorComponent {

  // To retrieve the hero cards again in case of an error
  @Output() onGetHeroesData : EventEmitter<void> = new EventEmitter;

  getHeroesData(): void{
    this.onGetHeroesData.emit();
  }
}
