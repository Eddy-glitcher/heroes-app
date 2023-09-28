import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsLoadingErrorComponent } from './cards-loading-error.component';

describe('CardsLoadingErrorComponent', () => {
  let component: CardsLoadingErrorComponent;
  let fixture: ComponentFixture<CardsLoadingErrorComponent>;
  let compiled : HTMLElement;
  let getHeroesDataSpy: any;
  let getHeroesData: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsLoadingErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsLoadingErrorComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('Should emit onGetHeroesData event when the RETRY button is clicked', () => {
    getHeroesDataSpy = spyOn(component.onGetHeroesData, 'emit');
    const btnRetry = compiled.querySelector("[data-test=btn-retry]");
    btnRetry?.dispatchEvent(new Event('click'));
    expect(getHeroesDataSpy).toHaveBeenCalled();
  });

  it('Should pass the test when getHeroesData() method has been called', () => {
    getHeroesData = spyOn(component, 'getHeroesData');
    component.getHeroesData();
    expect(getHeroesData).toHaveBeenCalled();
  });
});
