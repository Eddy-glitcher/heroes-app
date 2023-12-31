import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeroesAppRoutingModule } from './heroes-app-routing.module';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgOptimizedImage } from '@angular/common';
import { DebounceHeroListComponent } from './components/debounce-hero-list/debounce-hero-list.component'
import { ReactiveFormsModule } from '@angular/forms';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroImageNotFoundPipe } from './pipes/hero-image-not-found.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CardsLoadingErrorComponent } from './components/cards-loading-error/cards-loading-error.component';

@NgModule({
  declarations: [
    HomePageComponent,
    CharactersPageComponent,
    HeroSliderComponent,
    DebounceHeroListComponent,
    HeroCardComponent,
    HeroImageNotFoundPipe,
    CardsLoadingErrorComponent,
  ],
  imports: [
    CommonModule,
    HeroesAppRoutingModule,
    CarouselModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSkeletonLoaderModule,
  ]
})
export class HeroesAppModule { }
