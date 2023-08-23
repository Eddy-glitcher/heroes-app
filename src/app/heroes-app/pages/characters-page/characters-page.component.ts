import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MarvelHeroesService } from '../../services/marvel-heroes.service';
import { PaginationInstance } from 'ngx-pagination';
import { MarvelHeroe } from '../../interfaces/marvel-heroes';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit{

  heroeList : MarvelHeroe[] = [];
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

  constructor(private heroService : MarvelHeroesService){}

  ngOnInit(): void {
    this.heroService.getMarvelHeroes().subscribe({
      next: (heroeArrList) => {this.heroeList = heroeArrList; this.isHeroListLoading = false;}, // Get the herolist if there are no errors.
      error: (error : HttpErrorResponse) => { this.isHttpRequestFails = true; this.isHeroListLoading = false;} // To show the error message.
    });
  }
}
