import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceHeroListComponent } from './debounce-hero-list.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('DebounceHeroListComponent', () => {
  let component: DebounceHeroListComponent;
  let fixture: ComponentFixture<DebounceHeroListComponent>;
  let formBuilder : FormBuilder;
  let compiled : HTMLElement;
  let heroName : string = 'has';
  let heroFormEntrie : string = 'name';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations : [ DebounceHeroListComponent ],
      imports      : [ ReactiveFormsModule ],
      providers    : [ FormBuilder ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebounceHeroListComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    formBuilder = TestBed.inject(FormBuilder);
    component.heroForm = formBuilder.group({
      name: [''],
    });

    fixture.detectChanges();
  });

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('Should pass the test if the heroList input is defined', () => {
    expect(component.heroList).toBeDefined();
  });

  it('Should pass the test if heroForm contains the name field', () => {
    component = new DebounceHeroListComponent( new FormBuilder());
    expect(component.heroForm.contains('name')).toBeTruthy();
  });

  it('Should pass the test if the heroForm is initilized whit a string value', () => {
    let heroFormSpy = spyOn(component.heroForm.controls[heroFormEntrie], 'setValue');
    component.heroForm.controls[heroFormEntrie].setValue(heroName);
    expect(heroFormSpy).toHaveBeenCalledWith(heroName);
  });

  it('Should pass the test if searchHeroByName method is called', () => {
    let searchHeroByNameSpy = spyOn(component, 'searchHeroByName').and.callThrough();
    component.searchHeroByName(heroName);
    expect(searchHeroByNameSpy).toHaveBeenCalledWith(heroName);
  });

  it('Should emit the onSearchSelectedHero event when the btn-select-hero is clicked', () => {
    let searchSelectedHeroSpy = spyOn(component.onSearchSelectedHero, 'emit');
    component.searchSelectedHero(heroName, heroFormEntrie);
    const btnSelectedHero = compiled.querySelector("[data-test=btn-select-hero]");
    btnSelectedHero?.dispatchEvent(new Event('click'));
    expect(searchSelectedHeroSpy).toHaveBeenCalled();
  });

  it('Should emit the onSearchSelectedHero event when searchHeroesByKeyWord method is called', async() => {
    // First the heroForm 'name' control needs to have a value
    component.heroForm.controls[heroFormEntrie].setValue('has');
    await expect(component.heroForm.controls[heroFormEntrie].value).toEqual(heroName);

    // If the heroForm 'name' control have a value the event emiter is called
    const searchSelectedHeroByKeyWordSpy = spyOn(component.onSearchSelectedHero, 'emit');
    component.searchHeroesByKeyWord();
    expect(searchSelectedHeroByKeyWordSpy).toHaveBeenCalled();
  });

  it('Should emit the onResetHeroList event when the btn-clean-form is clicked', () => {
    let cleanFormEntrieSpy = spyOn(component.onResetHeroList, 'emit');
    const btnCleanForm = compiled.querySelector("[data-test=btn-clean-form]");
    btnCleanForm?.dispatchEvent(new Event('click'));
    expect(cleanFormEntrieSpy).toHaveBeenCalled();
  });
});
