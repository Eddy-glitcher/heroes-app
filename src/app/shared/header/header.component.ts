import { Component, ElementRef, HostListener, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  // Show or hide the menubar
  isMenuBarOpen : boolean = false;

  // Event to decrease the main opacity when the menu-bar is opened or not
  @Output()
  menuBarState = new EventEmitter<boolean>();

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

  // Execute the menu-bar event emitter
  sendMenuBarState(menuBarState : boolean){
    this.menuBarState.emit(menuBarState);
  }
}
