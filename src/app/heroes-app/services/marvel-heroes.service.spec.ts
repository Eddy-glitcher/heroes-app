import { TestBed } from '@angular/core/testing';
import { MarvelHeroesService } from './marvel-heroes.service';



describe('HeroServiceService', () => {
  let service: MarvelHeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelHeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
