import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeroesAppRoutingModule } from './heroes-app-routing.module';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    HomePageComponent,
    CharactersPageComponent,
    HeroSliderComponent,
  ],
  imports: [
    CommonModule,
    HeroesAppRoutingModule,
    CarouselModule,
    NgOptimizedImage,
  ]
})
export class HeroesAppModule { }
