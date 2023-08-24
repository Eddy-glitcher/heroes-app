import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MarvelHeroesService } from '../../services/marvel-heroes.service';
import { PaginationInstance } from 'ngx-pagination';
import { MarvelHero } from '../../interfaces/marvel-heroes';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit{

  heroList : MarvelHero[] = [];
  isHttpRequestFails : boolean = false;
  isHeroListLoading : boolean = true;

  // Pagination Assets
  paginationConfig: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 4,
    currentPage: 1
  };

  generateHeroCards(): number[] {
    return Array.from({ length: this.paginationConfig.itemsPerPage }, (_, index) => index);
  }

  // Order the heroes by the larger description
  orderHeroesByDescription(firstHero : MarvelHero, secondHero: MarvelHero) : number{
    if(firstHero.description > secondHero.description){
      return -1;
    }
    if(secondHero.description > firstHero.description){
      return 1;
    }
    return 0;
  }

  constructor(private heroService : MarvelHeroesService){}

  ngOnInit(): void {
    this.heroService.getMarvelHeroes().subscribe({
      next: (heroList) => { // Get the herolist if there are no errors.

        heroList.sort((a : MarvelHero, b: MarvelHero): number =>{ // To order the heroes by the larger description
          return this.orderHeroesByDescription(a,b);
        });
        this.heroList = heroList;
        this.isHeroListLoading = false;
      },
      error: (error : HttpErrorResponse) => {
        this.isHttpRequestFails = true;
        this.isHeroListLoading = false;
      }
    });
  }
}
