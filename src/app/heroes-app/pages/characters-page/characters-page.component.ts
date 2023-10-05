import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MarvelHeroesService } from '../../services/marvel-heroes.service';
import { PaginationControlsDirective, PaginationInstance } from 'ngx-pagination';
import { MarvelHero } from '../../interfaces/marvel-heroes';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit{

  heroList           : MarvelHero[] = [];
  heroListCopy       : MarvelHero[] = [];
  isHttpRequestFails : boolean = false;
  isHeroListLoading  : boolean = true;

  // Pagination Assets
  paginationConfig: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 4,
    currentPage: 1
  };

  // To get the rounded number of total paginator pages
  getTotalPaginatorPages(paginationControls: PaginationControlsDirective){
    return `${paginationControls.getCurrent()} / ${Math.ceil(this.heroList.length / this.paginationConfig.itemsPerPage)}`
  }

  // Generate the skeleton loader cards by the items per paginator page
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

  // To filter the heroList and search the receives hero from the child component
  seachSelectedHero(heroName : string): void{

    this.resetHeroList();

    if(heroName == ''){
      this.resetHeroList();
      return;
    }

    this.isHeroListLoading = true;
    this.heroList = this.heroList.filter((hero)=>{
      return hero.name.toLowerCase().includes(heroName.toLowerCase());
    });
    this.isHeroListLoading = false;
    this.paginationConfig.currentPage = 1;
  }

  // To reset the heroes List
  resetHeroList(): void{
    if (this.heroList == this.heroListCopy) {
      return;
    }else{
      this.heroList = this.heroListCopy;
    }
  }

  // To get the heroes list from Marvel Api
  getHeroesData(){
    this.isHeroListLoading = true;
    this.isHttpRequestFails = false;
    this.heroService.getMarvelHeroes().subscribe({
      next: (heroList) => { // Get the herolist if there are no errors.

        heroList.sort((a : MarvelHero, b: MarvelHero): number =>{ // To order the heroes by the larger description
          return this.orderHeroesByDescription(a,b);
        });
        this.heroList = heroList;
        this.heroListCopy = heroList;
        this.isHeroListLoading = false;
      },
      // To control the http error response and displays the error message
      error: (error : HttpErrorResponse) => {
        this.isHttpRequestFails = true;
        this.isHeroListLoading = false;
        console.log('Hay un error: ',error);
      }
    });
  }

  constructor(private heroService : MarvelHeroesService){}

  ngOnInit(): void {
    this.getHeroesData();
  }
}
