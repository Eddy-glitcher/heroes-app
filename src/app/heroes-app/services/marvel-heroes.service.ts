import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MarvelHeroes } from '../interfaces/marvel-heroes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelHeroesService {

  apiBaseUrl : string = environment.apiBaseUrl;
  apiKey     : string = environment.apiKey;
  apiHash    : string = environment.apiHash;

  getMarvelHeroes(): Observable<MarvelHeroes>{
    const apiUrl = `${this.apiBaseUrl}/characters?ts=1&apikey=${this.apiKey}&hash=${this.apiHash}&limit=100`;
    return this.httpRequest.get<MarvelHeroes>(apiUrl);
  }

  constructor(private httpRequest : HttpClient) { }
}
