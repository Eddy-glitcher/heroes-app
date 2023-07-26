import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesAppRoutingModule } from './heroes-app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    CharactersPageComponent,
  ],
  imports: [
    CommonModule,
    HeroesAppRoutingModule
  ]
})
export class HeroesAppModule { }
