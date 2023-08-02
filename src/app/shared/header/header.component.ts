import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  isMenuBarOpen : boolean = false;

  @ViewChild('menuOptions') menuOptions!: ElementRef<HTMLElement>;
  @HostListener('document:click', ['$event.target'])
  // To hide the nav options if the user clicks outside the navBar
  onClick(targetElement : Node): void {
    const clickedInside = this.menuOptions.nativeElement.contains(targetElement);
    if (!clickedInside && this.isMenuBarOpen) {
      this.isMenuBarOpen = !this.isMenuBarOpen;
    }
  }

}
