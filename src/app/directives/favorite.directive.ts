import {Directive, HostBinding, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appMwFavorite]'
})

export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
  @HostBinding('class.is-favorite-hovering') hovering = false;
  @HostListener('mouseenter') onMouseEnter(): void {
    this.hovering = true;
  }
  @HostListener('mouseleave') onMouseLeave(): void {
    this.hovering = false;
  }
  @Input() set appMwFavorite(value) {
    this.isFavorite = value;
  }
}
