import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MediaItemComponent} from './media-items/media-item.component';
import { AppComponent } from './app.component';
import {MediaItemListComponent} from './media-item-list/media-item-list.component';
import {FavoriteDirective} from './directives/favorite.directive';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [
    AppComponent
  ] // What is targeted by here.
})
export class AppModule { }
