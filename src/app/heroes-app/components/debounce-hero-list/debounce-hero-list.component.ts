import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, tap } from 'rxjs';
import { MarvelHero } from '../../interfaces/marvel-heroes';

@Component({
  selector: 'app-debounce-hero-list',
  templateUrl: './debounce-hero-list.component.html',
  styleUrls: ['./debounce-hero-list.component.scss']
})
export class DebounceHeroListComponent {

  // Receives the hero List from the parent
  @Input() heroList : MarvelHero[] = [];
  debounceHeroList  : MarvelHero[] = [];

  isTextBoxEmpty       : boolean = false; // To displays the searchbar cleaner icon
  isTextBoxFocused     : boolean = false; // To displays styles for searchbar input, button and icons
  isHeroSearchActive   : boolean = false; // To displays the search message
  isHeroSearchedExist  : boolean = false; // To displays the not found message
  showHeroListOptions  : boolean = false; // To displays the heroes List

  // To save the heroes name when the user types it in search box
  heroForm: FormGroup = this.fb.group({
    name : ['']
  });

  // This even emitter will be execute the search for selected hero
  @Output() onSearchSelectedHero: EventEmitter<string> = new EventEmitter();

  // This even emmiter will be restart the heroes list of the parent component
  @Output() onResetHeroList: EventEmitter<void> = new EventEmitter();

  // To search the hero in the list of heroes
  searchHeroByName(heroName: string): void{

    // If the control exist execute the sentences bellow
    if(this.heroForm.controls[heroName]){
      this.heroForm.controls[heroName].valueChanges.pipe(
        tap(()=>{

        // To show o hide the searchbar cleaner icon
        (this.heroForm.controls[heroName].value !== '') ?
                              this.isTextBoxEmpty = true :
                              this.isTextBoxEmpty = false;

        // To show or hide the search message when the user types it in the search box
        (this.heroForm.controls[heroName].value !== '' && this.debounceHeroList.length == 0 &&
        !this.isHeroSearchedExist)     ?
        this.isHeroSearchActive = true :
        this.isHeroSearchActive = false;

        }),
        // This debounceTime function delays the function execution
        debounceTime(300),
        ).subscribe( (value: string) =>{
          // If the entrie it´s included in the heroList, the hero name will be saved in the debounceList
          this.debounceHeroList =  this.heroList.filter((hero): boolean | void =>{
            if(value){
              return hero.name.toLowerCase().includes(value.toLowerCase());
            }
          });

          // To show or hide the search message and not found error message
          if(this.heroForm.controls[heroName].value !== '' && this.debounceHeroList.length == 0 && this.isHeroSearchActive == false){
            this.isHeroSearchedExist = true;
            this.isHeroSearchActive  = false;
          }else{
            this.isHeroSearchedExist = false;
            this.isHeroSearchActive  = false;
          }
        });
    }
  }

  // To select the hero and execute the search event emmiter to find the selected hero
  searchSelectedHero(hero : string, heroFormEntrie : string): void{
    this.heroForm.controls[heroFormEntrie].setValue(hero);
    this.showHeroListOptions = false;

    if (this.isHeroSearchActive == false && this.isHeroSearchedExist == false) {
      this.onSearchSelectedHero.emit(hero);
    }
  }

  // This method will be search the heroes that includes the search box entries
  searchHeroesByKeyWord(): void{
    if(!this.isHeroSearchActive && !this.isHeroSearchedExist){
      let heroKeyWord = this.heroForm.controls['name'].value;
      this.onSearchSelectedHero.emit(heroKeyWord);
    }
  }

  // To clean the search box and restart the heroes List
  cleanHeroFormEntrie(heroFormEntrie: string): void{
    this.isTextBoxEmpty      = false;
    this.isHeroSearchActive  = false;
    this.isHeroSearchedExist = false;
    this.debounceHeroList    = [];
    this.heroForm.controls[heroFormEntrie].setValue('');

    // Execute the even emitter that will be restart the heroes list of parent component
    this.onResetHeroList.emit();
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
