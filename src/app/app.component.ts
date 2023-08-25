import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'heroesApp';

  // To decrease or increment the main opacity
  isMenuBarOpen : boolean = false;

  // Receive the event emitter and execute it
  menuBarState(isMenuBarOpen  : boolean): boolean{
    this.isMenuBarOpen = isMenuBarOpen;
    return isMenuBarOpen;
  }
}
