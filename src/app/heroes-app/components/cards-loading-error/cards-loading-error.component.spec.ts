import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsLoadingErrorComponent } from './cards-loading-error.component';

describe('CardsLoadingErrorComponent', () => {
  let component: CardsLoadingErrorComponent;
  let fixture: ComponentFixture<CardsLoadingErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsLoadingErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsLoadingErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
