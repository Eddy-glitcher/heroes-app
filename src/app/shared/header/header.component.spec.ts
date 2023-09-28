import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { DebugElement } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should routerLink exists whit Home route', () => {
    const debugRoutes = fixture.debugElement.nativeElement.querySelectorAll('[routerLink]');
    let isHomeRouteExists = false;

    for (const route of debugRoutes) {
      if (route.attributes.routerLink['nodeValue'] == '/Heroes/Home') {
        isHomeRouteExists = true;
      }
    }
    expect(isHomeRouteExists).toBeTruthy();
  });

  it('should routerLink exists whit Characters route', () => {
    const debugRoutes = fixture.debugElement.nativeElement.querySelectorAll('[routerLink]');
    let isCharactersRouteExists = false;

    for (const route of debugRoutes) {
      if (route.attributes.routerLink['nodeValue'] == '/Heroes/Characters') {
        isCharactersRouteExists = true;
      }
    }
    expect(isCharactersRouteExists).toBeTruthy();
  });

});
