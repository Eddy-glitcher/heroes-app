import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MarvelHero } from '../../interfaces/marvel-heroes';
import { debounceTime, tap } from 'rxjs';

@Component({
  selector: 'app-debounce-hero-list',
  templateUrl: './debounce-hero-list.component.html',
  styleUrls: ['./debounce-hero-list.component.scss']
})
export class DebounceHeroListComponent {

  // Receives the hero List from the parent
  @Input() heroList : MarvelHero[] = [];
  debounceHeroList  : MarvelHero[] = [];

  isTextBoxEmpty       : boolean = false;
  isTextBoxFocused     : boolean = false;
  isHeroSearchActive   : boolean = false;
  isHeroSearchedExist  : boolean = false;
  showHeroListOptions  : boolean = false;

  heroForm: FormGroup = this.fb.group({
    name : ['']
  });

  validateEmptyFormField(heroName: string): void{
    this.heroForm.controls[heroName].valueChanges.pipe(
      tap(()=>{

      (this.heroForm.controls[heroName].value.length !== 0) ?
                            this.isTextBoxEmpty = true :
                            this.isTextBoxEmpty = false;

      (this.heroForm.controls[heroName].value.length >= 0 && this.debounceHeroList.length == 0 &&
      !this.isHeroSearchedExist)     ?
      this.isHeroSearchActive = true :
      this.isHeroSearchActive = false;

      }),
      debounceTime(300),
      ).subscribe( (value: string) =>{
        this.debounceHeroList =  this.heroList.filter((hero): boolean | void =>{
          if(value){
            return hero.name.toLowerCase().includes(value.toLowerCase());
          }
        });

        if(this.heroForm.controls[heroName].value.length !== 0 && this.debounceHeroList.length == 0 && this.isHeroSearchActive == false){
          this.isHeroSearchedExist = true;
          this.isHeroSearchActive  = false;
        }else{
          this.isHeroSearchedExist = false;
          this.isHeroSearchActive  = false;
        }
      });
  }

  selectHero(hero : string, formEntrie : string): void{
    this.heroForm.controls[formEntrie].setValue(hero);
    this.showHeroListOptions = false;
  }


  cleanFormField(campo: string): void{
    this.isTextBoxEmpty      = false;
    this.isHeroSearchActive  = false;
    this.isHeroSearchedExist = false;
    this.debounceHeroList    = [];
    this.heroForm.controls[campo].reset();
  }

    // To manipulate de html click event
    @ViewChild('divElement') divElement!: ElementRef<HTMLElement>;
    @HostListener('document:click', ['$event.target'])
    // To hide the suggested Heroes list when the user cliks outside the text box
    onClick(targetElement : Node): void {
      const clickedInside = this.divElement.nativeElement.contains(targetElement);
      if (!clickedInside) {
        this.showHeroListOptions = false;
      }
    }

  constructor(private fb: FormBuilder) { }
}
