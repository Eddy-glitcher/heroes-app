#  Marvel Universe App

The Marvel Universe is an application to show, search and learn about the Marvel heroes, this application is Based on the [Marvel API](https://developer.marvel.com/ "Marvel API")

The purpose of The Marvel Universe application is to learn and practice the Angular methodologies, strategies and best practices, Typescript, Javascript, Html, Scss, Git and Github and aslo for fun and knowledge.

The [Marvel Universe](https://marvel-universe-app.netlify.app/Heroes/Home "Marvel Universe") project is live.

[![Marvel-Universe-Home](https://i.postimg.cc/jS7fRhMQ/Marvel-Universe-Home.png "Marvel-Universe-Home")](https://i.postimg.cc/jS7fRhMQ/Marvel-Universe-Home.png "Marvel-Universe-Home")

[![Marvel-Universe-Characters](https://i.postimg.cc/nrmsnFkV/Marvel-Universe-Characters.png "Marvel-Universe-Characters")](https://i.postimg.cc/nrmsnFkV/Marvel-Universe-Characters.png "Marvel-Universe-Characters")

[![Marvel-Universe-Characters-2](https://i.postimg.cc/NMvJY4mW/Marvel-Universe-Characters-2.png "Marvel-Universe-Characters-2")](https://i.postimg.cc/NMvJY4mW/Marvel-Universe-Characters-2.png "Marvel-Universe-Characters-2")

[![Marvel-Universe-Characters-3](https://i.postimg.cc/G20YH3Lf/Marvel-Universe-Characters-3.png "Marvel-Universe-Characters-3")](https://i.postimg.cc/G20YH3Lf/Marvel-Universe-Characters-3.png "Marvel-Universe-Characters-3")

# Functionalities and Features

- There is a search bar to search Heroes by name.
- There is a list of heroes in the characters view.
- There are multiple cards to display the heroes.
- The cards contains detailed information for each hero.
- The heroe details are displayed on a reverse card for each hero.
- There is a paginator to list all the Marvel heroes by pages.

# Technology and installation

1. This project was generated whit Angular CLI version 15.2.5, if you want to install this version in your local project, type the next command.
```
npm i @angular/cli@15.2.5
```
2. **Nodejs**: This project use [nodejs version 18.15.0](https://nodejs.org/en/blog/release/v18.15.0 "node version 18.15.0") and [npm 9.5.0](https://www.npmjs.com/package/npm/v/9.5.0 "npm 9.5.0")

3. This project use the library [ngx-owl-carousel-o](https://www.npmjs.com/package/ngx-owl-carousel-o "ngx-owl-carousel-o") version 15.0.0 to generate the carousel of pokemon types.
```
npm install ngx-owl-carousel-o
```
4. Import the CarouselModule to your principal module.
```
import { CarouselModule } from 'ngx-owl-carousel-o';
```
5. This project use the library ngx-pagination [ngx-pagination](https://www.npmjs.com/package/ngx-pagination "ngx-pagination"). Version 6.0.3, to list all the Marvel heroes by cards.
```
npm install ngx-pagination
```
6. Improt the ngx-pagination-module to your principal module
```
import { NgxPaginationModule } from 'ngx-pagination'
```
7. This project use the library ngx-skeleton-loader [ngx-skeleton-loader](https://www.npmjs.com/package/ngx-skeleton-loader "ngx-skeleton-loader"). Version 7.0.0. To display a cards loader.
```
npm install ngx-skeleton-loader
```
8. Import the ngx-skeleton-loader-module to your principal module
```
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader'
```
9. To clone and use this project type the next code.
```
git clone https://github.com/Eddy-glitcher/heroes-app.git
```
10. Use the next command to install the necessary packages for the project.
```
npm install
```
11. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

12. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

13. To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

------------

# Project Structure

The system of organization used in this project is described whit the next structure.

1. The **heroes-app** file is used to contain all the entire aplication, this file acts as a main Module for the aplication.

2. The **components** folder, was created to implement the component system, dividing the functionalities of the application in small parts.

## List of components in file.

1. **hero-slider** : This component is used to display a simple gallery images, this galllery is implemented whit a slider provided by **CarouselModule**.

	- The CarouselModule configuration is provided by the **heroSliderOptions**, in this object there are multiple properties like loop, that provides the possibility to reproduce the slider in a infinite cicle. The nav propertie enable the slider to navigate through the slider items.

```
  // Slider assets
  heroSliderOPtions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      550: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
```
- The slider html implementation is as follows:
	  <owl-carousel-o
        [options]="heroSliderOPtions"
        #owlCar
		>
    	...code....
     </owl-carousel-o>

- The full implementation of this module and his properties are described in the [official documentation](https://github.com/vitalii-andriiovskyi/ngx-owl-carousel-o "oficial documentation")

- The **heroImageList** is a input propertie that receives an array of images that will be used by the slider.

	`  // List of Hero images that are received from the parent component `
	`@Input() heroImageList: HeroeImages[] = [];`

        <ng-container
          *ngFor="let hero of heroImageList"
        >
          <ng-template carouselSlide>
            <figure class="slider__{{hero.id}}">
              <img
                ngSrc="{{ hero.imageUrl }}"
                width="300"
                height="550"
                alt="{{ hero.alt }}"
              />
              <figcaption>
                <div>
                  <div>
                    <h3>{{ hero.name }}</h3>
                  </div>
                </div>
              </figcaption>
            </figure>
          </ng-template>
        </ng-container>

2. **hero-card** : This component is used to display information for each of the heroes, The component receives a 'heroe' object, which contains all the hero information to display on the card, it also receives a boolean, responsible for displaying a card loading animation when the hero has not yet finished loading. This animation is provided by the **NgxSkeletonLoaderModule**. The full implementation of this modules is described in the [official documentation](https://github.com/willmendesneto/ngx-skeleton-loader "oficial documentation").

- The animation configuration is provided by the skeletonItemsLoadingStyles object. which contains multiple properties to define the scss style for the html item.

	    // Skeleton cards animation Styles
        skeletonItemsLoadingStyles = {
        width  : '100%',
        height : '100%',
        margin : '0px auto',
        'background-color'  : '#232A30',
        'animation-duration': '2s'
      }
- The Html implementation is as follows.

      <ngx-skeleton-loader
      	class="hero-card__loading-name"
      	count="1"
      	appearance="line"
      	[animation]="animation"
      	[theme]="skeletonItemsLoadingStyles"
      ></ngx-skeleton-loader>

	- To generate the animation effect we need to define some properties:
		- **count** : This property alternate between 1 and 5 to displays the animation
`  count : number = 1;`
		- **animation**: This property define the animation style, you can use a different style for the animation like 'progress', 'progress-dark' and 'pulse'.
`animation : string = 'pulse';`
		- **intervalId**: This property is used to define the interval animation execution.
`intervalId : number | null = null;`
		- **isFlipHeroCardActive** : This boolean property is definded to change the state between the front card and the back card in order to display the hero information.  When this property is 'true', the card flips, and the back side of the cards are displayed. This property is set to 'false' by default, and it displays the front side of the card.
`isFlipHeroCardActive : boolean = false;`
		- **widthHeightSizeInPixels** : This property is defined to manipulate the animation box sizes.
`widthHeightSizeInPixels : number = 50;`

- The animation statement is neccesary for the animation effect. The Interval executes the animation every 5000 milliseconds, alternating between the 'pulse' and 'progress-dark' animation styles.

      // Animation Function that will be switch the animation styles
      ngOnInit(): void {
        this.intervalId = window.setInterval(() => {
          this.animation = this.animation === 'pulse' ? 'progress-dark' : 'pulse';
          this.count = this.count === 1 ? 5 : 1;
          this.widthHeightSizeInPixels =
            this.widthHeightSizeInPixels === 50 ? 100 : 50;
        }, 5000);
      }

- To prevent a memory leak, it is necessary to clean up the intervalid. this can be done using the 'ngOnDestroy' Lifecycle Hook.

      // Clear the Interval Fucntion to prevent the memory leak before the component is           destroyed.
      ngOnDestroy() {
        if (this.intervalId) {
          clearInterval(this.intervalId);
        }
      }

------------

3. **debounce-hero-list**: This component is used to display a list of heroes. When the user searches for a hero by name, the component returns only the list of heroes that match the words entered by the user in the search bar. The search bar triggers an event that emits a function to filter the heroes array based on the entered search words.

- To display the list of Heroes, the component receives the 'heroList' from the parent component, this list is defined as an Input property.
` @Input() heroList : MarvelHero[] = [];`

- The debounceHeroList property is used to create a copy of the 'heroList' property, this is useful if the user is searching for a hero in the search bar, as this property filters the heroes by name that match the search value and also returns them. If the user deleates the search bar value, the values from 'heroList' are assigned back to the debounceHerList property, to make the suggestions visible.
`  debounceHeroList  : MarvelHero[] = [];`

- The 'isTextBoxEmpty' is a boolean property that is used to show or hide the delete icon in the search bar. This property is declared with the 'false' value by default. When the user types in the search bar, this property is set to 'true', and the icon is displayed.
`isTextBoxEmpty : boolean = false;`

- The 'isTextBoxFocused' property is used to appy styles to html elements through a scss class, when the user focuses on the search bar.
`isTextBoxFocused : boolean = false;`

- The 'isHeroSearchActive' property is used to display a searching message in the Html, when the heroes are being searched for. This property is set to 'false' by default.
`isHeroSearchActive : boolean = false;`

- The 'isHeroSearchActive' property is used to display an error message when searched heroes are not found. This property is set to 'false' by default.
`isHeroSearchedExist : boolean = false;`

- The 'showHeroListOptions' property is used to display the searched list of heroes if it exists in the Html, this property is set to 'false' by default.
`showHeroListOptions : boolean = false;`

- The 'heroForm' property is used to store the search bar value in the name property when the user types in it.

      heroForm: FormGroup = this.fb.group({
        name : ['']
      });

- The 'searchHeroByName' function is used to filter the heroes by name and return the results that match whit he searched value.
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

- The 'searchSelectedHero' function is executed when the user clicks on one of the suggested heroes. This function emits an event that sends the selected hero to the parent component, which is responsible for searching the sent hero.

- Before the hero is sent, the 'heroForm' is initialized whit the selected hero's name, and the suggested list is closed.

      // To select the hero and execute the search event emitter to find the selected hero
      searchSelectedHero(hero : string, heroFormEntrie : string): void{
        this.heroForm.controls[heroFormEntrie].setValue(hero);
        this.showHeroListOptions = false;
    
        if (this.isHeroSearchActive == false && this.isHeroSearchedExist == false) {
          this.onSearchSelectedHero.emit(hero);
        }
      }

- The 'searchHeroesByKeyWord' function is executed when the user searches for a hero by name in the search bar using a keyword. For example, if the user is searching for heroes whose names contain 'la,' the suggested hero list will return only those heroes whose names include 'la'.

      // This method will be search the heroes that includes the search box entries
      searchHeroesByKeyWord(): void{
        if(!this.isHeroSearchActive && !this.isHeroSearchedExist){
          let heroKeyWord = this.heroForm.controls['name'].value;
          this.onSearchSelectedHero.emit(heroKeyWord);
        }
      }

- The 'cleanHeroFormEntry' function is used to reset the 'heroForm', clear the suggested list of heroes, reset some properties that control the suggested list styles, and emit an event to reset the hero list search.

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

- When the suggested list of heroes is active and the user clicks outside the list, the 'onClick' function is executed. This function searches in the html for a reference called 'divElement' to assign the functionality and close the suggested list of heroes, by setting the 'showHeroListOptions' boolean property to 'false'.

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

- Html code.

```html
    <div class="searchbar" #divElement>
      <!-- ...Code... -->
    </div>
```

4. **cards-loading-error**: This component is displayed only if there is an error from the Marvel API, and the received response is an empty array or an error. This component includes an error message and a simple button to retry the Marvel API HTTP Request.

- The 'getHeroesData' function is used to emit an event to the parent component, this event retries the HTTP Request to Marvel API.

      `// To retrieve the hero cards again in case of an error.`
      `@Output() onGetHeroesData : EventEmitter<void> = new EventEmitter;`

        getHeroesData(): void{
           this.onGetHeroesData.emit();
        }

- Html Code

```html
    <section class="error-message">
      <article>
    ...Code...
        <button data-test="btn-retry" type="button" (click)="getHeroesData()" aria-label="Get the heroes">RETRY</button>
      </article>
    </section>
```
------------

## Interfaces

The Interfaces used in this project were generated by [quicktype.io](https://quicktype.io/ "quicktype.io").

1. **hero-image**: This interface describes the data of the hero images in the hero-slider component.

2. **marvel-heroes**: This interface describes the data of each individual hero from Marvel API Response.

------------

## Pages

The pages are the different views of the project, and these views are displayed when the user clicks on the navBar items. The 'home-page' is loading first by default.

1. **home-page**: This components contains a basic information about the creator and also the **hero-slider** component, to show the heroe galley.

- The 'heroImageList' property is a simple Array of objects that contains, characteristics such as name, id and a poster image for each heroe. This property is sent to the child component **hero-slider** to display the heroes' slider.

      // This is the list of hero images that will be displayed in the slider
      heroImageList: HeroeImages[] = [
        { id: 'first-hero-image' , name: 'Spiderman', alt: 'Spiderman Image', imageUrl: 'https://i.postimg.cc/QdB5wbCH/Spiderman.jpg' },
        { id: 'second-hero-image', name: 'Iron Man' , alt: 'Iron Man Image' , imageUrl: 'https://i.postimg.cc/XJ9bXTvt/Iron-Man.jpg'  },
        { id: 'third-hero-image' , name: 'Deadpool' , alt: 'Deadpool Image' , imageUrl: 'https://i.postimg.cc/zBYZh8V8/Deadpool.jpg'  },
        { id: 'fourth-hero-image', name: 'Thor'     , alt: 'Thor Image'     , imageUrl: 'https://i.postimg.cc/XJ66Pgtw/Thor.jpg'      },
      ];

- Html Code.

```html
<section class="home">
  <div class="max-width-content">
    <div class="home__title">
      <h1>
        MARVEL HEROES APP <br />
        By
      </h1>
      <span>Edier Aguirre</span>
    </div>

    <!----------- Hero Slider component Start----------->
    <div class="home__hero-images">
      <app-hero-slider [heroImageList]="heroImageList"></app-hero-slider>
    </div>
    <!----------- Hero Slider component End----------->
  </div>
</section>
```

2. **characters-page**: This component is used to list and display the heroes through a multiple heroe cards.

- The 'heroList' property is used to store the list of heroes from the Marvel API.
`heroList : MarvelHero[] = [];`

- The 'heroListCopy' property is used to store a copy of heroes' data, preventing multiple Marvel API requests, when the 'heroList' is filtered or the data is modified.
`  heroListCopy : MarvelHero[] = [];`

- The 'isHttpRequestFails' boolean property is used to display an error message if the Marvel API response fails or returns a empty list of heroes.
`isHeroListLoading : boolean = true;`

- The 'paginationConfig' property is used to define and set up a paginator.

      // Pagination Assets
      paginationConfig: PaginationInstance = {
        id: 'custom',
        itemsPerPage: 4,
        currentPage: 1
      };

- The 'getTotalPaginatorPages' function is used to calculate the total number of pages in the paginator.

      // To get the rounded number of total paginator pages
      getTotalPaginatorPages(paginationControls: PaginationControlsDirective){
        return `${paginationControls.getCurrent()} / ${Math.ceil(this.heroList.length / this.paginationConfig.itemsPerPage)}`
      }

- The 'generateHeroCards' function is used to generate the skeleton loader cards based on the number of cards on the screen.

      // Generate the skeleton loader cards by the items per paginator page
      generateHeroCards(): number[] {
        return Array.from({ length: this.paginationConfig.itemsPerPage }, (_, index) => index);
      }

- The 'orderHeroesByDescription' function is used to sort the list of heroes based on their descriptions, with a priority given to heroes whose descriptions are longer than others. This is done becasuse many heroes don´t have a description.

      // Order the heroes by the larger description
      orderHeroesByDescription(firstHero : MarvelHero, secondHero: MarvelHero) : number{
        if(firstHero.description > secondHero.description){
          return -1;
        }
        if(secondHero.description > firstHero.description){
          return 1;
        }
        return 0;
      }

- The 'seachSelectedHero' function is used to search for a hero by name, It accomplishes this by filtering the list of heroes and returning only those match the searched hero's name.

      // To filter the heroList and search the receives hero from the child component
      seachSelectedHero(heroName : string): void{
    
        this.resetHeroList();
    
        if(heroName == ''){
          this.resetHeroList();
          return;
        }
    
        this.isHeroListLoading = true;
        this.heroList = this.heroList.filter((hero)=>{
          return hero.name.toLowerCase().includes(heroName.toLowerCase());
        });
        this.isHeroListLoading = false;
        this.paginationConfig.currentPage = 1;
      }

- The 'resetHeroList' function is used to reset the 'heroList' when it has been filtered.

      // To reset the heroes List
      resetHeroList(): void{
        if (this.heroList == this.heroListCopy) {
          return;
        }else{
          this.heroList = this.heroListCopy;
        }
      }

- The 'getHeroesData' function is used to retrieve Marvel heroes from the Marvel API. If an error occurs with the HTTP request, it displays an error message on the screen.

      // To get the heroes list from Marvel Api
      getHeroesData(){
        this.isHeroListLoading = true;
        this.isHttpRequestFails = false;
        this.heroService.getMarvelHeroes().subscribe({
          next: (heroList) => { // Get the herolist if there are no errors.
    
            heroList.sort((a : MarvelHero, b: MarvelHero): number =>{ // To order the heroes by the larger description
              return this.orderHeroesByDescription(a,b);
            });
            this.heroList = heroList;
            this.heroListCopy = heroList;
            this.isHeroListLoading = false;
          },
          // To control the http error response and displays the error message
          error: (error : HttpErrorResponse) => {
            this.isHttpRequestFails = true;
            this.isHeroListLoading = false;
            console.log('Hay un error: ',error);
          }
        });
      }

- To perform HTTP requests, it is neccesary to inject the MarvelHeroService into the component constructor.

` constructor( private heroService : MarvelHeroesService ){}`

- Finally this component includes sub-components for displaying the heroes or a error message if one ocurrs. The list of components is as follows.

- The **debounce-hero-list** is used to show a list of suggested heroes.
- The **hero-card** is used to displays a list of heroe cards.
- The **paginator-template** is used to display a list of hero cards by pages, this functionality is provided by the **NgxPaginationModule**.
- The **cards-loading-error** is used to display an error message only if the Marvel API HTTP Request fails in the process, and the heroes list is empty.

------------

## Shared

The shared file is used to contain components that will be shared across different contexts of the application:

1. **header.component**: This component constains the Marvel logo, the navBar items to navigate across the site and also the social media items, like github and linkedin url.

- The 'isMenuBarOpen' boolean property is used to control the opening of the route list in the navBar, toggle between the open and closed icons in the navBar, and display the header list of routes. This property is set to 'false' by default.
`isMenuBarOpen : boolean = false;`

- The 'sendMenuBarState' function is used to emit and event whit a boolen value to the parent component.

```
// Event to decrease the main opacity when the menu-bar is opened or not
  @Output()
  menuBarState = new EventEmitter<boolean>();

// Execute the menu-bar event emitter
  sendMenuBarState(menuBarState : boolean){
	this.menuBarState.emit(menuBarState);
  }
````

- The 'onClick' function is executed when the user clicks outside the navBar, this function automatically closes the navBar and emits an event whit a boolean to the parent component. This function seeks for a 'menuOptions' reference in the Html and executes the code as follows.

```
      @ViewChild('menuOptions') menuOptions!: ElementRef<HTMLElement>;
      @HostListener('document:click', ['$event.target'])
      // To hide the nav options if the user clicks outside the navBar
      onClick(targetElement : Node): void {
        const clickedInside = this.menuOptions.nativeElement.contains(targetElement);
        if (!clickedInside && this.isMenuBarOpen) {
          this.isMenuBarOpen = !this.isMenuBarOpen;
          // When the user clicks outside the menu, sends the menu-bar event emitter state
          this.sendMenuBarState(false);
        }
      }
```

- Html Code.

```html
<section class="header" #menuOptions>
  <div class="header__content">
  </div>

  <nav
    class="header__routes menu"
    [ngClass]="isMenuBarOpen ? 'header__show--routes' : ''"
  >
  </nav>
</section>
```

------------

## Pipes

This project uses custom pipes to transform the output data.

1. **hero-image-not-found.pipe**: This pipe is used to set a default poster image, when the Heroe does´nt have it in the list of heroes from Marvel API Response.

- This pipe executes a function when it receives an image URL 'String'. It compares the received image URL with a set of predefined values, and if it doesn't match any of them, the 'http' image URL is replaced with 'https' to ensure a secure connection. In case of a match, a default image url is returned.

      // This pipe will show a default image when the received path is some of these.
      transform(image : string): string {
        if (image == 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
          || image == 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif' || image == '') {
          return 'https://i.postimg.cc/R0WYKH6t/marvel-image-not-found.png';
        }
        // If the image doesn´t match whit any path the initial image will be returned
        return image.replaceAll('http', 'https'); // Fix the http insecure request image
      }

------------

## Services

This file contains all the service functionalities to communicate the application whit the Marvel API.

1. **heroes-app.service**: This service is responsible for retrieving the Heroes data from the Marvel API. It implements a single function to enable HTTP request for seamless communication.

	 - This component injects the HttpClient in the constructor to make the Marvel http request.

	`  constructor( private httpRequest : HttpClient ) { }`

2. Before you can get a Marvel Api Response, you need to create the Endpoint to get the list of heroes.

	 - First you need to sing up in the [official Marvel web](https://developer.marvel.com/ "official Marvel web").
	 - You can see the guide in the [official Marvel guide](https://developer.marvel.com/documentation/getting_started "official Marvel guide") 

- To fetch the heroes from the Marvel API, the 'getMarvelHeroes' function is called. This function utilizes the 'get' method from the 'HttpClient' service. The function handles the Marvel API response, maps it, and returns an Observable with the heroes' results. If there is an error with the HTTP response, this function returns a 'HttpErrorResponse' as a new Observable error.

``
      // Marvel Api assets to make the http request
      apiBaseUrl : string = environment.apiBaseUrl;
      apiKey     : string = environment.apiKey;
      apiHash    : string = environment.apiHash;
    
      // To get the heroe list of marvel api
      getMarvelHeroes(): Observable<MarvelHero[]>{
        const apiUrl = `${this.apiBaseUrl}/characters?ts=1&apikey=${this.apiKey}&hash=${this.apiHash}&limit=100`; // To build the end point api request
        return this.httpRequest.get<MarvelHeroes>(apiUrl).pipe(
          retry(1), // If the http request fails is retried once
          map( (resp: MarvelHeroes) => resp.data.results), // Maps the results items to get the heroes
          catchError( (error: HttpErrorResponse) => throwError(()=>error)) // Control the Http errors
        );
      }

------------

## Assets

This file contains all the general styles, these are separated by multiples scss files.

1.  general-styles.scss: This scss file contains all the references to the general styles:

    @import './style-elements/ui-color-palette.scss';
    @import './style-elements/positions.scss';
    @import './style-elements/typography.scss';
    @import './style-elements/animations.scss';

2. style-elements: This file was created to centralize the styles.

	- **animations.scss** : This file contains the general animations.
	- **positions.scss** : This file contains the mixins for display positions, like flexbox.
	- **typography.scss** : This file constains the font family used and the tipography sizes.
	 - **ui-color-palette**: This file constains the general UI colors for the application.

------------

## Environments

-  **environment.ts**: This file contains the environment variables to make the Marvel API Http Request in the development mode.

    export const environment = {
      production: false,
      apiBaseUrl : `https://gateway.marvel.com:443/v1/public/`,
      apiKey    : 'c406b583f659e396a4322ae441b37967',
      apiHash    : 'a560799e94928a89625e8f03b1894f4d'
    };

------------

## Lazy-loading

This application uses a simple system of routes whit lazy-loading:

1. **Heroes/Home**: This route loads the **home-page.component**.

2. **Heroes/Characters**: This route loads the **characters-page.component**.

3. If the route does´nt exists, the **Heroes/Home** route is loaded by default.

------------

## app.component

This is the main component of the aplication and the routes component content is loaded here.

- The 'isMenuBarOpen' boolean property is used to apply an Html class when the property is set to true. Thsi property is set to 'true' when the user opens the navBar options.
` isMenuBarOpen : boolean = false;`

- The 'menuBarState' function is used to toggle the 'isMenuBarOpen' boolean when the user opens or closes the navBar, changing the boolean value from 'true' to 'false' or vice versa.

      // Receive the event emitter and execute it
      menuBarState(isMenuBarOpen  : boolean): boolean{
        this.isMenuBarOpen = isMenuBarOpen;
        return isMenuBarOpen;
      }

- Html Code.

```html
<header>
  <app-header (menuBarState)="menuBarState($event)"></app-header>
</header>

<main [ngClass]="isMenuBarOpen ? 'menu-bar-open' : ''">
  <section>
    <router-outlet></router-outlet>
  </section>
</main>
```
------------

## Normalize.scss
This CSS file contains all the styles to provide a consistent and unified appearance across different browsers.

------------
# Possible Issues
If you are experiencing issues with the visualization of heroe cards or the display of stats and basic information, please check your internet connection first. If you encounter any problems with the application or have any suggestions for improvements, please feel free to provide feedback. Your input is valuable, and I will work on addressing any issues you encounter.
