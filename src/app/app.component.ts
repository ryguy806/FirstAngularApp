import { Component } from '@angular/core';

@Component({
  selector: 'app-mw',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstMediaItem = {
    id: 1,
    name: 'Power Rangers: The Movie',
    medium: 'Movie',
    category: 'Action-Adventure',
    year: 1995,
    watchedOn: '09/07/2016',
    isFavorite: false
  };
  onMediaItemDelete(mediaItem): void {}
}
