import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MarvelHero } from '../../interfaces/marvel-heroes';
@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit, OnDestroy{
  // This is the hero data that will be load on cards
  @Input() hero!: MarvelHero;

  // This boolean will be load the skeleton cards or the hero cards
  @Input() isHeroListLoading?: boolean;

  // Skeleton cards animation Assets
  count                   : number = 1;
  animation               : string = 'pulse';
  intervalId              : number | null = null;
  isFlipHeroCardActive    : boolean = false;
  widthHeightSizeInPixels : number = 50;

  // Skeleton cards animation Styles
  skeletonItemsLoadingStyles = {
    width  : '100%',
    height : '100%',
    margin : '0px auto',
    'background-color'  : '#232A30',
    'animation-duration': '2s'
  }

  // Animation Assets that will be switch the animation styles
  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      this.animation = this.animation === 'pulse' ? 'progress-dark' : 'pulse';
      this.count = this.count === 1 ? 5 : 1;
      this.widthHeightSizeInPixels =
        this.widthHeightSizeInPixels === 50 ? 100 : 50;
    }, 5000);
  }

  // Clear the Interval Fucntion to prevent the memory leak before the component is destroyed
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
