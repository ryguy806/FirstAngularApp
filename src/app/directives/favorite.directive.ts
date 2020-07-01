import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appMwFavorite]'
})

export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
  @Input() set appMwFavorite(value) {
    this.isFavorite = value;
  }
}
