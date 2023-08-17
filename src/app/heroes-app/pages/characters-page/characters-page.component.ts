import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MarvelHeroesService } from '../../services/marvel-heroes.service';
import { MarvelHeroe } from '../../interfaces/marvel-heroes';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit{

  heroeList : MarvelHeroe[] = [];
  isHttpRequestFails : boolean = false;

  constructor(private heroService : MarvelHeroesService){}

  ngOnInit(): void {
    this.heroService.getMarvelHeroes().subscribe({
      next: (heroeArrList) => {this.heroeList = heroeArrList}, // Get the herolist if there are no errors.
      error: (error : HttpErrorResponse) => { this.isHttpRequestFails = true;} // To show the error message.
    });
  }
}
