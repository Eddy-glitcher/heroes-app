import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceHeroListComponent } from './debounce-hero-list.component';

describe('DebounceHeroListComponent', () => {
  let component: DebounceHeroListComponent;
  let fixture: ComponentFixture<DebounceHeroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebounceHeroListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebounceHeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
