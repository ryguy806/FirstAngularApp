import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[appMwFavorite]'
})

export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
}
