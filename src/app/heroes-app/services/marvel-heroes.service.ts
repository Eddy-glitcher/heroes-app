import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { MarvelHero, MarvelHeroes } from '../interfaces/marvel-heroes';

@Injectable({
  providedIn: 'root'
})
export class MarvelHeroesService {

  // Marvel Api assets to make the http request
  apiBaseUrl : string = environment.apiBaseUrl;
  apiKey     : string = environment.apiKey;
  apiHash    : string = environment.apiHash;

  // To get the heroe list of marvel api
  getMarvelHeroes(): Observable<MarvelHero[]>{
    const apiUrl = `${this.apiBaseUrl}/characters?ts=1&apikey=${this.apiKey}&hash=${this.apiHash}&limit=100`; // To build the end point api request
    return this.httpRequest.get<MarvelHeroes>(apiUrl).pipe(
      retry(1), // If the http request fails is retried once
      map( (resp: MarvelHeroes) => resp.data.results), // Maps the results items to get the heroes
      catchError( (error: HttpErrorResponse) => throwError(()=>error)) // Control the Http errors
    );
  }

  // To get the hero form marvel api by id
  getMarvelHeroById(heroId : any): Observable<MarvelHero>{
    const apiUrl = `${this.apiBaseUrl}/characters/${heroId}?ts=1&apikey=${this.apiKey}&hash=${this.apiHash}`; // To build the end point api request
    return this.httpRequest.get<MarvelHeroes>(apiUrl).pipe(
      retry(1), // If the http request fails is retried once
      map( (hero)  => hero.data.results[0]), // Maps the results items to get the hero
      catchError( (error: HttpErrorResponse) => throwError(()=>error)) // Control the Http errors
    );
  }

  constructor(private httpRequest : HttpClient) { }
}
