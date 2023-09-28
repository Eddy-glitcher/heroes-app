import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { HeroSliderComponent } from '../../components/hero-slider/hero-slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgOptimizedImage } from '@angular/common';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent, HeroSliderComponent ],
      imports: [CarouselModule, BrowserAnimationsModule, NgOptimizedImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should heroImageList be defined', () => {
    expect(component.heroImageList).toBeDefined();
  });

  it('should pass the test if heroImageList contains the mockHero', () => {
    let mockHero = {
      id: 'third-hero-image',
      name: 'Deadpool',
      alt: 'Deadpool Image',
      imageUrl: 'https://i.postimg.cc/zBYZh8V8/Deadpool.jpg'
    }
    expect(component.heroImageList).toEqual(jasmine.arrayContaining([mockHero]));
  });

  it('should heroImageList has 4 items', () => {
    expect(component.heroImageList.length).toEqual(4);
  });
});
