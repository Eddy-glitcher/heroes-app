import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroSliderComponent } from './hero-slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

describe('HeroSliderComponent', () => {
  let component: HeroSliderComponent;
  let fixture: ComponentFixture<HeroSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSliderComponent ],
      imports: [CarouselModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should heroSliderOPtions be defined', () => {
    expect(component.heroSliderOPtions).toBeDefined();
  });

  it('should heroSliderOPtions nav propertie exists', () => {
    expect(component.heroSliderOPtions.nav).toBeTruthy();
  });

  it('should heroImageList be defined', () => {
    expect(component.heroImageList).toBeDefined();
  });
});
