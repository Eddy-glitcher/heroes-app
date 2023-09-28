import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

describe('AppComponent', () => {
  let app : AppComponent;
  let compiled : HTMLElement;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        AppComponent,
        HeaderComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.nativeElement as HTMLElement;
    app = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('Should menuBarState() return true', () => {
    expect(app.menuBarState(true)).toBeTruthy();
  });

  it(`should have as title 'heroesApp'`, () => {
    expect(app.title).toEqual('heroesApp');
  });

  it('should render the header', () => {
      expect(compiled.querySelector('header')).toBeTruthy();
  });

  it('should render the main', () => {
      expect(compiled.querySelector('main')).toBeTruthy();
  });

  it('should router-outlet exists', () => {
    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(debugElement).not.toBeNull();
  });
});
