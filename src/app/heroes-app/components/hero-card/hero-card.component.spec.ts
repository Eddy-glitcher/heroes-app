import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCardComponent } from './hero-card.component';
import { HeroImageNotFoundPipe } from '../../pipes/hero-image-not-found.pipe';

describe('HeroCardComponent', () => {
  let component: HeroCardComponent;
  let fixture: ComponentFixture<HeroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroCardComponent, HeroImageNotFoundPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass the tests if skeletonItemsLoadingStyles is defined', () => {
    expect(component.skeletonItemsLoadingStyles).toBeDefined();
  });

});
