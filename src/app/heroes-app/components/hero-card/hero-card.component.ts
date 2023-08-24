import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MarvelHero } from '../../interfaces/marvel-heroes';
@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit, OnDestroy{
  @Input() hero!: MarvelHero;
  @Input() isHeroListLoading?: boolean;

  animation : string = 'pulse';
  count: number = 1;
  widthHeightSizeInPixels: number = 50;
  intervalId: number | null = null;

  skeletonItemsLoadingStyles = {
    width: '100%',
    height: '100%',
    margin: '0px auto',
    'background-color': '#232A30',
    'animation-duration': '2s'
  }

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      this.animation = this.animation === 'pulse' ? 'progress-dark' : 'pulse';
      this.count = this.count === 1 ? 5 : 1;
      this.widthHeightSizeInPixels =
        this.widthHeightSizeInPixels === 50 ? 100 : 50;
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
